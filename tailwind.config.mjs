/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'greensea-custom': '#95D2B3',
			}
		},
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin')
	],
}
