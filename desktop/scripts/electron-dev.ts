import { fileURLToPath } from 'url'

export const DEFAULT_RENDERER_PORT = 1420
export const DEFAULT_RENDERER_URL = `http://localhost:${DEFAULT_RENDERER_PORT}`
export const LOCAL_NO_PROXY_ENTRIES = ['localhost', '127.0.0.1', '::1']

export function mergeNoProxy(existing: string | undefined, required = LOCAL_NO_PROXY_ENTRIES) {
  const entries = new Set(
    (existing ?? '')
      .split(',')
      .map(entry => entry.trim())
      .filter(Boolean),
  )
  for (const entry of required) entries.add(entry)
  return Array.from(entries).join(',')
}

export function createElectronDevEnv(env: NodeJS.ProcessEnv = process.env) {
  const rendererUrl = env.ELECTRON_RENDERER_URL ?? DEFAULT_RENDERER_URL
  const noProxy = mergeNoProxy(env.NO_PROXY ?? env.no_proxy)
  return {
    ...env,
    ELECTRON_RENDERER_URL: rendererUrl,
    NO_PROXY: noProxy,
    no_proxy: noProxy,
  }
}

async function isPortAvailable(port: number): Promise<boolean> {
  try {
    const server = Bun.serve({
      hostname: '127.0.0.1',
      port,
      fetch() {
        return new Response('ok')
      },
    })
    server.stop(true)
    return true
  } catch {
    return false
  }
}

async function findAvailablePort(preferredPort: number): Promise<number> {
  for (let port = preferredPort; port < preferredPort + 50; port += 1) {
    if (await isPortAvailable(port)) return port
  }
  throw new Error(`No available Vite port found from ${preferredPort} to ${preferredPort + 49}`)
}

async function waitForRenderer(rendererUrl: string) {
  const deadline = Date.now() + 30_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(rendererUrl)
      if (response.ok) return
    } catch {
      await Bun.sleep(250)
    }
  }
  throw new Error(`Timed out waiting for Vite renderer at ${rendererUrl}`)
}

async function main() {
  const desktopRoot = fileURLToPath(new URL('..', import.meta.url))
  const preferredPort = Number.parseInt(process.env.ELECTRON_RENDERER_PORT ?? String(DEFAULT_RENDERER_PORT), 10)
  const rendererPort = await findAvailablePort(Number.isFinite(preferredPort) ? preferredPort : DEFAULT_RENDERER_PORT)
  const rendererUrl = process.env.ELECTRON_RENDERER_URL ?? `http://localhost:${rendererPort}`
  const childEnv = createElectronDevEnv({
    ...process.env,
    ELECTRON_RENDERER_URL: rendererUrl,
    ELECTRON_RENDERER_PORT: String(rendererPort),
    LOOP_CLAW_ELECTRON_DISABLE_SINGLE_INSTANCE_LOCK: process.env.LOOP_CLAW_ELECTRON_DISABLE_SINGLE_INSTANCE_LOCK ?? '1',
    ELECTRON_USER_DATA_DIR: process.env.ELECTRON_USER_DATA_DIR ?? `${desktopRoot}\\.electron-dev-user-data-${rendererPort}`,
  })
  process.env.NO_PROXY = childEnv.NO_PROXY
  process.env.no_proxy = childEnv.no_proxy

  const shellCmd = process.env.ComSpec ?? 'C:\\Windows\\System32\\cmd.exe'
  const viteArgs = process.platform === 'win32'
    ? [shellCmd, '/c', 'bun', 'run', 'dev', '--', '--host', '127.0.0.1', '--port', String(rendererPort), '--strictPort']
    : ['bun', 'run', 'dev', '--', '--host', '127.0.0.1', '--port', String(rendererPort), '--strictPort']

  console.log(`[electron-dev] renderer: ${rendererUrl}`)

  const vite = Bun.spawn(viteArgs, {
    cwd: desktopRoot,
    env: childEnv,
    stdout: 'inherit',
    stderr: 'inherit',
  })

  function stopVite() {
    vite.kill()
  }

  process.on('SIGINT', () => {
    stopVite()
    process.exit(130)
  })
  process.on('SIGTERM', () => {
    stopVite()
    process.exit(143)
  })

  await waitForRenderer(rendererUrl)

  const electronArgs = process.platform === 'win32'
    ? [shellCmd, '/c', 'bunx', 'electron', './electron-dist/main.cjs']
    : ['bunx', 'electron', './electron-dist/main.cjs']

  const electron = Bun.spawn(electronArgs, {
    cwd: desktopRoot,
    env: childEnv,
    stdout: 'inherit',
    stderr: 'inherit',
  })

  const exitCode = await electron.exited
  stopVite()
  process.exit(exitCode)
}

if (import.meta.main) {
  await main()
}
