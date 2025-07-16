import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Whenever your React app makes a request to something like /api/some-data, Vite will automatically forward that request to http://localhost:3000/api/some-data.
      // It looks like the request is coming from the same origin, so CORS problems are avoided.
    },
  },
  plugins: [react()],
})
