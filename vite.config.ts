import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  assetsInclude: ['**/*.m4v'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    preserveSymlinks: false,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
});
