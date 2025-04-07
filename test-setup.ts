import '@testing-library/jest-dom'
import '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import { afterAll, afterEach, beforeAll } from 'vitest'

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
