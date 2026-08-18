import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

const DEV_API_TARGET = process.env.DEV_API_TARGET ?? 'http://localhost:3000';

export default defineConfig({
  // .env lives at the repo root, not in this app folder.
  envDir: fileURLToPath(new URL('../../', import.meta.url)),
  plugins: [react()],
  resolve: {
    alias: {
      '@brandpilot/shared': fileURLToPath(new URL('../../packages/shared/src/index.ts', import.meta.url)),
    },
  },
  // Served at the root of its own domain (e.g. panel.example.com).
  // Change to '/admin/' if you ever host it under a sub-path.
  base: '/',
  server: {
    port: 5174,
    proxy: {
      '/api': {
        target: DEV_API_TARGET,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
