import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // O base DEVE corresponder ao nome do seu repositório no GitHub
  base: '/Orgafarma-Portal/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});