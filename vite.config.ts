import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import viteTsConfigPaths from 'vite-tsconfig-paths';

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
});
