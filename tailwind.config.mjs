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
				'dark-custom': '#252422',
			},
			keyframes: {
				fade: {
					'0%': { opacity: 1 },
					'100%': { opacity: 0 },
				}
			},
			animation: {
				fade: 'fade 1s ease-in-out linear',
			}
		},
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin')
	],
}
