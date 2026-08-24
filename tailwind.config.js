/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				comic: ["Comic Relief", "sans-serif"],
				edu: ["Edu SA Beginner", "cursive"],
			},
		},
	},
	plugins: [],
};

