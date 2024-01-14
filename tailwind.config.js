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
				dark: "#131313",
				light: "#FAFAFA",
				primary: "#F91306",
				secondary: "#EFE6D5",
				terciary: "rgb(131,140,125)",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#F91306",

					secondary: "#EFE6D5",

					accent: "rgb(131,140,125)",

					neutral: "#131313",

					"base-100": "#FAFAFA",

					info: "#26cdff",

					success: "#00cf6b",

					warning: "#ff7b00",

					error: "#ff0069",
				},
			},
		],
	},
};
