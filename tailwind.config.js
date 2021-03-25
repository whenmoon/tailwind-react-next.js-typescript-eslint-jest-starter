const colors = require('tailwindcss/colors')

module.exports = {
	purge: {
		content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	},
	theme: {
		extend: {
			colors: {
				'light-blue': colors.lightBlue,
				cyan: colors.cyan,
			},
		},
	},
	variants: {},
	plugins: [],
}
