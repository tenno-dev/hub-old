import { defineConfig } from 'vite';
import routify from '@roxi/routify/vite-plugin';
import WindiCSS from 'vite-plugin-windicss';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		routify(),
		svelte(),
		Unocss({
			presets: [
				presetAttributify({
					/* preset options */
				}),
				presetUno(),
				presetIcons({
					extraProperties: {
						display: 'inline-flex',
						'vertical-align': 'middle'
					}
				})
			]
		}),
		WindiCSS({
			scan: {
				dirs: ['src'],
				fileExtensions: ['svelte', 'ts', '@urql/svelte']
			}
		})
	],
	ssr: {
		noExternal: ['swiper', 'svelte-i18n']
	},
	optimizeDeps: {
		include: ['deepmerge'],
		exclude: ['sswr', 'svelte-flagpack', 'svelte-i18n', 'swiper', 'dayjs']
	}
});
