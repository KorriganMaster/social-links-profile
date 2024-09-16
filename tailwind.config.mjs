/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				secondary: {
					100: 'hsl(75, 94%, 57%)',
				},
				grey: {
					700: 'hsl(0, 0%, 20%)',
					800: 'hsl(0, 0%, 12%)',
					900: 'hsl(0, 0%, 8%)',
				},
				link: {
					100: 'hsl(228, 45%, 44%)',
				},
			},
		},
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
		},
	},
	plugins: [],
}
