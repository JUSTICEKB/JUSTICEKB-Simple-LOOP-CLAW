import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const { startMock, statusMock, logoutMock } = vi.hoisted(() => ({
  startMock: vi.fn(),
  statusMock: vi.fn(),
  logoutMock: vi.fn(),
}))

vi.mock('../api/loopClawOAuth', () => ({
  loopClawOAuthApi: {
    start: startMock,
    status: statusMock,
    logout: logoutMock,
  },
}))

import { useLoopClawOAuthStore } from './loopClawOAuthStore'

const initialState = useLoopClawOAuthStore.getState()

describe('loopClawOAuthStore', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    startMock.mockReset()
    statusMock.mockReset()
    logoutMock.mockReset()
    useLoopClawOAuthStore.setState({
      ...initialState,
      status: null,
      isPolling: false,
      isLoading: false,
      error: null,
    })
  })

  afterEach(() => {
    useLoopClawOAuthStore.getState().stopPolling()
    useLoopClawOAuthStore.setState(initialState)
    vi.useRealTimers()
  })

  it('login does not start polling until the browser launch succeeds', async () => {
    startMock.mockResolvedValue({
      authorizeUrl: 'http://localhost:3456/api/loopclaw-oauth/callback',
      state: 'state-123',
    })

    const result = await useLoopClawOAuthStore.getState().login()

    expect(result.authorizeUrl).toContain('/api/loopclaw-oauth/callback')
    expect(useLoopClawOAuthStore.getState().isPolling).toBe(false)
  })

  it('startPolling stops after the status becomes logged in', async () => {
    statusMock
      .mockResolvedValueOnce({ loggedIn: false })
      .mockResolvedValueOnce({
        loggedIn: true,
        expiresAt: Date.now() + 60_000,
        scopes: ['user:inference'],
        subscriptionType: 'max',
      })

    useLoopClawOAuthStore.getState().startPolling()
    expect(useLoopClawOAuthStore.getState().isPolling).toBe(true)

    await vi.advanceTimersByTimeAsync(2_000)
    expect(useLoopClawOAuthStore.getState().isPolling).toBe(true)

    await vi.advanceTimersByTimeAsync(2_000)
    expect(useLoopClawOAuthStore.getState().status).toMatchObject({
      loggedIn: true,
      subscriptionType: 'max',
    })
    expect(useLoopClawOAuthStore.getState().isPolling).toBe(false)
  })
})
