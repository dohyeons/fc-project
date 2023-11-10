import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s ease-in-out",
			},
			colors: {
				prospect: "#e3743f",
				semiPro: "#607c88",
				pro: "#f18e10",
				worldClass: "#9b68f4",
				challenger: "#88e2d1",
				champions: "#72357b",
				superChampions: "#f4eddd",
			},
		},
	},
	plugins: [],
};
export default config;
