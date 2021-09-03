const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Uncial Antiqua', 'Open Sans', 'system-ui', 'sans-serif'],
            body: ['Open Sans', 'system-ui', 'sans-serif'],
        },
        colors: {
            primary: {
                // TODO: Add light and dark versions
                DEFAULT: '#FF3864',
            },
            secondary: {
                DEFAULT: '#2D0D40',
            },
            transparent: 'transparent',
            white: colors.white,
            current: 'currentColor',
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
