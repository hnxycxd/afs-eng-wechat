import { resolve } from 'path'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
// import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(({ command }) => {
  const config: UserConfig = {
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
        resolvers: [
          VantResolver(),
          IconsResolver({ prefix: 'icon', customCollections: ['bank'] }),
        ],
      }),
      Icons({
        defaultClass: 'icon',
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          bank: FileSystemIconLoader(
            'src/assets/img/svg',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor"'),
          ),
        },
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
