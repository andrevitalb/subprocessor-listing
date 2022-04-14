const twColors = require("tailwindcss/colors")
const _ = require("lodash")

const colors = _.pick(twColors, ["gray", "red", "green", "black", "white"])

const customColors = {
	...colors,
	gray: {
		100: "#EBEBEB",
		200: "#999999",
		300: "#212121",
		400: "#171717",
		500: "#0E0E0E",
	},
	teal: {
		100: "#EBF5F4",
		200: "#C2E2DF",
		300: "#86C4BE",
		400: "#359D93",
	},
}

module.exports = {
	content: [
		"./src/pages/**/*.ts",
		"./src/pages/**/*.tsx",
		"./src/components/**/*.ts",
		"./src/components/**/*.tsx",
	],
	theme: {
		extend: {
			fontFamily: {
				display: ["Space Grotesk", "sans-serif"],
				body: ["Source Sans Pro", "sans-serif"],
				mono: [
					"Menlo",
					"Monaco",
					"Lucida Console",
					"Liberation Mono",
					"DejaVu Sans Mono",
					"Bitstream Vera Sans Mono",
					"Courier New",
					"monospace",
				],
			},
			colors: customColors,
		},
	},
	plugins: [require("@tailwindcss/typography", "@tailwindcss/custom-forms")],
}
