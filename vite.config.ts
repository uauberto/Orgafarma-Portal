import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Orgafarma-Portal/',
  build: {
    outDir: 'docs',        // ← AQUI muda de dist para docs
    assetsDir: 'assets',
    sourcemap: false
  }
})
