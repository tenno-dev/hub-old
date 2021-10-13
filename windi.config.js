import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	safelist: 'bg-box,text-primary',
	theme: {
		extend: {
			colors: {
				box: '#303030',
				primary: '#bbb'
			}
		}
	},
	variants: {},
	plugins: []
});
