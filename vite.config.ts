import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Orgafarma-Portal/', // Fundamental para funcionar no GitHub Pages (subdiretório)
  build: {
    outDir: 'dist',
  }
});