import { defineConfig } from 'vitest/config';

export default defineConfig({
  define: process.env.VITEST ? {} : { global: 'window' },
  test: {
    environment: 'happy-dom',
  },
});
