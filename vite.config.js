import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'


import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Pages(),
    react(),
    Sitemap({
      hostname: 'https://www.allmovieshub.live'
    })
  ],
})
