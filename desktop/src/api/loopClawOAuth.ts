// desktop/src/api/loopClawOAuth.ts

import { api, getBaseUrl } from './client'

export type HahaOAuthStatus =
  | { loggedIn: false }
  | {
      loggedIn: true
      expiresAt: number | null
      scopes: string[]
      subscriptionType: 'pro' | 'max' | 'team' | 'enterprise' | null
    }

function currentServerPort(): number {
  const port = new URL(getBaseUrl()).port
  const parsed = Number.parseInt(port, 10)
  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error(`Cannot determine server port from baseUrl: ${getBaseUrl()}`)
  }
  return parsed
}

export const loopClawOAuthApi = {
  start() {
    return api.post<{ authorizeUrl: string; state: string }>(
      '/api/loopclaw-oauth/start',
      { serverPort: currentServerPort() },
    )
  },

  status() {
    return api.get<HahaOAuthStatus>('/api/loopclaw-oauth')
  },

  logout() {
    return api.delete<{ ok: true }>('/api/loopclaw-oauth')
  },
}
