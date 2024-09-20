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
				'greensea-custom2': '#589E7B',
				'dark-custom': '#252422',
			},
			animation: {
				marquee: "marquee 15s linear infinite alternate",
				
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(calc(-100% + 350px))" },
				},
				
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin')
	],
}
