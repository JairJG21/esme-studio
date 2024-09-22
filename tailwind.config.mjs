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
				marquee2: "marquee2 15s linear infinite alternate",
				marquee3: "marquee3 8s linear infinite alternate",
				marquee4: "marquee4 5s linear infinite alternate",
				
			},
			keyframes: {
				marquee: {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(calc(-100% + 350px))" },
				},
				marquee2: {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(calc(-100% + 700px))" },
				},
				marquee3: {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(calc(-100% + 1000px))" },
				},
				marquee4: {
					from: { transform: "translateX(0%)" },
					to: { transform: "translateX(calc(-100% + 1200px))" },
				},
			},
		},
	},
	plugins: [
		require('daisyui'),
		require('flowbite/plugin')
	],
}
