/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  accent: "#FF8000",
		  titlewhite: "#FFFFFF",
		  textwhite: "#D1D4DB",
		  grey: "#808080",
		},
		screens: {
		  xs: "475px",
		},
	  },
	},
	plugins: [],
};