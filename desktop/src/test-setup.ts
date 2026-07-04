import { vi } from 'vitest'

if (typeof window !== 'undefined') {
  const store: Record<string, string> = {}
  const mockLocalStorage = {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = String(value)
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key]
    }),
    clear: vi.fn(() => {
      for (const key in store) {
        delete store[key]
      }
    }),
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
    get length() {
      return Object.keys(store).length
    }
  }

  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true,
    configurable: true,
  })
}
