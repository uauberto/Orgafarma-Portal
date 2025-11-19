import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // O base DEVE corresponder ao nome do seu repositório no GitHub
  // Ex: se o repo é https://github.com/uauberto/Orgafarma-Portal
  // o base deve ser '/Orgafarma-Portal/'
  base: '/Orgafarma-Portal/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});