import { defineConfig } from 'vite'
import routify from '@roxi/routify/vite-plugin'
import WindiCSS from 'vite-plugin-windicss'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    routify(),
    svelte(),
    Icons({
      compiler: 'svelte',
    }),
    WindiCSS({
      scan: {
        dirs: ['src'],
        fileExtensions: ['svelte', 'ts', '@urql/svelte'],
      },
    }),
  ],
  ssr: {
    noExternal: ['swiper','svelte-i18n'],
  },
  optimizeDeps: {
    include: ['deepmerge'],
    exclude: [
      'sswr',
      'svelte-flagpack',
      'svelte-i18n',
      'swiper',
      'dayjs',
    ],
  },
})
