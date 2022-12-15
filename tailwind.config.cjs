/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/images/portrait.jpg')",
      },
      backgroundColor: {
		  brandGreen: "rgb(187 247 208)",
		  brandBlue: "#FDEBF7",
      },
    },
  },
  plugins: [],
};
