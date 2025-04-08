import '@testing-library/jest-dom'
import '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { afterAll, afterEach, beforeAll, vi } from 'vitest'

import { server } from '~/test/server'

beforeAll(() => {
	server.listen()
})

afterEach(() => {
	server.resetHandlers()
})

afterAll(() => {
	server.close()
})

class IntersectionObserver {
	observe = vi.fn()
	disconnect = vi.fn()
	unobserve = vi.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
	writable: true,
	configurable: true,
	value: IntersectionObserver,
})