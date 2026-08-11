import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages отдаёт сайт из /<repo>/, а не с корня домена —
  // без base ассеты (JS/CSS/картинки) будут запрашиваться по абсолютным
  // путям с корня и получать 404.
  base: '/fingold-light-rebuild/',
  plugins: [react()],
  server: {
    // Проксирует /api на локальный Express-бэкенд (backend/index.js, порт 4000) в dev-режиме.
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
})
