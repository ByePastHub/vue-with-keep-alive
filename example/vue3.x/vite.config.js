import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-with-keep-alive',
  plugins: [vue(), viteCompression()],
  server: {
    host: '0.0.0.0'
  },
})
