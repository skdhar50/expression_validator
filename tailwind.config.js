/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html, js}", "./scripts/*.js"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
