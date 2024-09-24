import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({ presets: [presetUno()] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
