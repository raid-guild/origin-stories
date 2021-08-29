module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            display: ['Uncial Antiqua'],
            body: ['Open Sans', 'system-ui'],
        },
        colors: {
            raidRed: {
                DEFAULT: '#FF3864',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
