import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command }) => {
  const config: UserConfigExport = {
    resolve: {
      alias: {
        '@': resolve('./src'),
        'utils': resolve('./src/utils'),
      },
    },
    plugins: [
      vue(),
      // AutoImport({
      //   imports: [
      //     'vue',
      //     'vue-router',
      //   ],
      //   dts: true,
      // }),
      Components({
        dts: true,
        resolvers: [VantResolver()],
      }),
    ],
    // TODO:
    // optimizeDeps: {
    //   include: ['vant', 'lodash-es'],
    // },
    server: {
      port: 4000,
      proxy: {
        '/localAfs': {
          target: 'http://10.18.113.181:31386/api/apply',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/localAfs/, ''),
        },
        '/local': {
          target: 'http://localhost:8090',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/local/, ''),
        },
      },
    },
  }
  if (command === 'build') {
    config.esbuild = {
      drop: ['console', 'debugger'],
    }
  }
  return config
})
