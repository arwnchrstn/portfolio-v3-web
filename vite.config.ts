import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        dir: 'dist',
        manualChunks: undefined,
        entryFileNames: 'index.js',
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.name.includes('.css')) {
            return 'styles/[hash].[ext]'
          }

          return 'assets/[hash].[ext]'
        },
        chunkFileNames: 'chunks/[hash].js'
      }
    }
  }
})
