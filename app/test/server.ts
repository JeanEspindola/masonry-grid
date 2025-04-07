import { setupServer } from 'msw/node'

import { handlers as photoHandler } from './photoHandler'

export const server = setupServer(
  ...photoHandler,
)
