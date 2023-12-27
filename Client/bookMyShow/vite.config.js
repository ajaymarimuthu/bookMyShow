import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy:{
    '/api': {
      target: 'http://localhost:8002', // Replace with your Node.js server URL
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  }
})
