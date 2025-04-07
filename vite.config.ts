import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths()],

  test: {
    setupFiles: ['test-setup.ts'],
    globals: true,
    cache: { dir: 'node_modules/.vitest' },
    environment: 'jsdom',
    include: ['app/**/*.test.{ts,tsx}'],
    reporters: ['default'],
    env: loadEnv('test', process.cwd(), ''),
    coverage: {
      reportsDirectory: 'coverage/app',
      include: ['app/**/*.*'],
      exclude: ['app/config/*.*', 'app/root.tsx', 'app/routes.ts', 'app/test/*.*'],
      provider: 'v8',
    },
  }
});
