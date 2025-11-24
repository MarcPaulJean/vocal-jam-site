import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement pour qu'elles soient accessibles lors du build
  // Fix: Cast process to any to avoid TypeScript error regarding missing cwd property on Process type
  const env = loadEnv(mode, (process as any).cwd(), '');
  
  return {
    plugins: [react()],
    base: './', // Assure que les chemins sont relatifs pour l'hébergement
    define: {
      // Permet au code d'utiliser process.env.API_KEY côté navigateur
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});