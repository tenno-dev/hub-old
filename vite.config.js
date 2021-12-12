import { defineConfig } from 'vite';
import routify from '@roxi/routify/vite-plugin';
import WindiCSS from 'vite-plugin-windicss';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import UnoCss from 'unocss/vite';
import { extractorSvelte  } from '@unocss/core';
import { presetAttributify, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		routify(),
		UnoCss({
			extractors: [extractorSvelte],
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
		svelte(),
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
