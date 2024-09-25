import path  from 'node:path'
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgoPlugin from 'vite-plugin-svgo'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      script: {
      defineModel: true,
      },
      template: {
      transformAssetUrls: {
      video: ['src', 'poster'],
      audio: ['src'],
      TIcon: ['src'],
      img: ['src'],
      BaseInput: ['prepend-icon', 'append-icon'],
      TInputText: ['prepend-icon', 'append-icon'],
      TInputMobile: ['prepend-icon', 'append-icon'],
      TInputSelect: ['prepend-icon', 'append-icon'],
      TInputSearch: ['prepend-icon', 'append-icon'],
      Empty: ['image', 'icon'],
      TButton: ['icon'],
      },
      },
      }),
    svgoPlugin({
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
              cleanupIds: {}
            }
          }
        },
        'removeXMLNS',
        'prefixIds'
      ]
    }),
    Unocss({ presets: [presetUno()] }),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [
      'vue',
      ],
      dts: 'src/types/auto-imports.d.ts',
      }),
  ],
  resolve: {
    alias: 
    {
      'vue': path.resolve(__dirname, 'ds/node_modules/vue'),
      '@vue': path.resolve(__dirname, 'ds/node_modules/@vue'),
      'vue-router': path.resolve(__dirname, 'ds/node_modules/vue-router'),
      'pinia': path.resolve(__dirname, 'ds/node_modules/pinia'),
      '@': path.resolve(__dirname, './src'),
      '@icons': path.resolve(__dirname, 'ds/src/assets/icons'),      
      '@components': path.resolve(__dirname, 'ds/src/components'),      
      '@hooks': path.resolve(__dirname, 'ds/src/hooks'),      
      '@repository': path.resolve(__dirname, 'ds/src/repository'),      
      '@@': path.resolve(__dirname, 'ds/src'),
      'tsitfy': path.resolve(__dirname, 'ds'),
    }
        
  }
})
