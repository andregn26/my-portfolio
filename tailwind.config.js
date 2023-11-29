/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
	screens: {
		sm: "475px",
		// => @media (min-width: 640px) { ... }
		md: "768px",
		// => @media (min-width: 768px) { ... }
		lg: "1024px",
		// => @media (min-width: 1024px) { ... }
		xl: "1280px",
		// => @media (min-width: 1280px) { ... }
		"2xl": "1536px",
		// => @media (min-width: 1536px) { ... }
	},
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
				primary: "#DA7B07",
				secondary: "#FDDAB0",
				primaryDark: "#3FA5F3",
				secondaryDark: "#074473",
			},
		},
	},
	plugins: [],
};
