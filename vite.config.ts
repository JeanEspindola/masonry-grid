import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), !process.env.VITEST && reactRouter(), tsconfigPaths()],

  test: {
    setupFiles: ['test-setup.ts'],
    globals: true,
    cache: { dir: 'node_modules/.vitest' },
    environment: 'jsdom',
    include: ['app/**/*.test.{ts,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: 'coverage/app',
      include: ['app/**/*.*'],
      exclude: ['app/config/*.*'],
      provider: 'v8',
    },
  },
});
