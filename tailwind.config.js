const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			display: ['Uncial Antiqua', 'Open Sans', 'system-ui', 'sans-serif'],
			sans: ['Open Sans', 'system-ui', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: {
					// TODO: Add light and dark versions
					DEFAULT: '#FF3864',
				},
				dark: {
					DEFAULT: '#2D0D40',
					darker: '#19101F',
				},
				transparent: 'transparent',
				white: colors.white,
				current: 'currentColor',
			},
			backgroundImage: (theme) => ({
				map: "url('/images/map.png')",
			}),
			// refer to: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: '#fff',
						fontSize: '1.25em',
						blockquote: {
							borderLeftColor: theme('colors.primary.DEFAULT'),
							color: colors.gray[200],
							fontWeight: '600',
						},
						a: {
							color: theme('colors.primary.DEFAULT'),
							'&:hover': {
								color: theme('colors.pink[600]'),
								cursor: 'pointer',
							},
						},
						strong: {
							color: theme('colors.white'),
						},
						h4: {
							color: colors.white,
						},
					},
				},
			}),
		},
		backgroundImage: (theme) => ({
			map: "url('/images/Background.png')",
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
