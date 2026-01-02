import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  base: '/angelieyu/',
  // base: '/',
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', // This tells esbuild to process .js files as jsx
      },
    },
  },
});
