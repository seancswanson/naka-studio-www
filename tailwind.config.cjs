/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				skinShadow: 'rgb(var(--color-shadow) / <alpha-value>)'
			},
			fontFamily: {
				'spaceMono': "'Space Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace"
			},
			backgroundImage: {
				portrait: "url('/src/images/portrait.jpg')",
				davines: "url('/src/images/davines.jpg')",
				aboutMe1: "url('/src/images/about-me-1.jpg')",
				aboutMe2: "url('/src/images/about-me-2.jpg')"
			},
			backgroundColor: {
				brandGreen: "rgb(187 247 208)",
				brandBlue: "#FDEBF7",
				brandFloralWhite: "floralwhite",
				brandWheat: "#a1843a26",
				skin: {
					base: 'var(--color-bg-base)',
					accent: 'var(--color-bg-accent)',
				}
			},
			minHeight: {
				'50': '50px',
				'160': '160px'
			},
			fontFamily: {
				abuget: 'Abuget'
			},
			minWidth: {
				'475': '475px'
			},
			backgroundPosition: {
				shiftUp: "0px -40px",
				shiftUpSm: "0px -10px"
			},
			textColor:
			{
				skin: {
					base: 'var(--color-base)',
				}
			},
		},
	},
	plugins: [],
}
