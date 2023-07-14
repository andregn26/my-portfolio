/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"spin-slow": "spin 8s linear infinite",
			},
			fontFamily: {
				mont: ["var(--font-mont)"],
			},
			colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
			},
		},
	},
	plugins: [],
};
