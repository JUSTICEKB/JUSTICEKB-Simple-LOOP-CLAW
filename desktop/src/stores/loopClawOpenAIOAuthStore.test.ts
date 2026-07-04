import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { startMock, statusMock, logoutMock } = vi.hoisted(() => ({
  startMock: vi.fn(),
  statusMock: vi.fn(),
  logoutMock: vi.fn(),
}))

vi.mock('../api/loopClawOpenAIOAuth', () => ({
  loopClawOpenAIOAuthApi: {
    start: startMock,
    status: statusMock,
    logout: logoutMock,
  },
}))

import { useLoopClawOpenAIOAuthStore } from './loopClawOpenAIOAuthStore'

const initialState = useLoopClawOpenAIOAuthStore.getState()

describe('loopClawOpenAIOAuthStore', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    startMock.mockReset()
    statusMock.mockReset()
    logoutMock.mockReset()
    useLoopClawOpenAIOAuthStore.setState({
      ...initialState,
      status: null,
      isPolling: false,
      isLoading: false,
      error: null,
    })
  })

  afterEach(() => {
    useLoopClawOpenAIOAuthStore.getState().stopPolling()
    useLoopClawOpenAIOAuthStore.setState(initialState)
    vi.useRealTimers()
  })

  it('login returns authorizeUrl without starting polling', async () => {
    startMock.mockResolvedValue({
      authorizeUrl: 'http://localhost:3456/callback/openai?state=openai-state',
      state: 'openai-state',
    })

    const result = await useLoopClawOpenAIOAuthStore.getState().login()

    expect(result.authorizeUrl).toContain('/callback/openai')
    expect(useLoopClawOpenAIOAuthStore.getState().isPolling).toBe(false)
  })

  it('startPolling stops after OpenAI OAuth status becomes logged in', async () => {
    statusMock
      .mockResolvedValueOnce({ loggedIn: false })
      .mockResolvedValueOnce({
        loggedIn: true,
        expiresAt: Date.now() + 60_000,
        email: 'user@example.com',
        accountId: 'acct_123',
      })

    useLoopClawOpenAIOAuthStore.getState().startPolling()
    expect(useLoopClawOpenAIOAuthStore.getState().isPolling).toBe(true)

    await vi.advanceTimersByTimeAsync(2_000)
    expect(useLoopClawOpenAIOAuthStore.getState().isPolling).toBe(true)

    await vi.advanceTimersByTimeAsync(2_000)
    expect(useLoopClawOpenAIOAuthStore.getState().status).toMatchObject({
      loggedIn: true,
      email: 'user@example.com',
      accountId: 'acct_123',
    })
    expect(useLoopClawOpenAIOAuthStore.getState().isPolling).toBe(false)
  })

  it('logout clears status and stops polling', async () => {
    logoutMock.mockResolvedValue({ ok: true })
    useLoopClawOpenAIOAuthStore.setState({
      status: {
        loggedIn: true,
        expiresAt: Date.now() + 60_000,
        email: 'user@example.com',
        accountId: 'acct_123',
      },
    })
    useLoopClawOpenAIOAuthStore.getState().startPolling()

    await useLoopClawOpenAIOAuthStore.getState().logout()

    expect(logoutMock).toHaveBeenCalledTimes(1)
    expect(useLoopClawOpenAIOAuthStore.getState().status).toEqual({ loggedIn: false })
    expect(useLoopClawOpenAIOAuthStore.getState().isPolling).toBe(false)
  })
})
