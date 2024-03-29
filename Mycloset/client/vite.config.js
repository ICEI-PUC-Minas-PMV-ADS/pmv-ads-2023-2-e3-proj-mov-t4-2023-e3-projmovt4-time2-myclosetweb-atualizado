import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import ReactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react(), ReactRefresh],
})
