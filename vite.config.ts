import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Assure que les chemins sont relatifs pour l'hébergement
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});