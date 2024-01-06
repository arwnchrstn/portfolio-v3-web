/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/__tests__/setupTests.ts'
  }
})
