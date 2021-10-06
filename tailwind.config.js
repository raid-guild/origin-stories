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
            sans: ['Open Sans', 'system-ui', 'sans-serif'],
        },
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
            dropShadow: {
                featured: ' 0px 0px 8px 0px rgba(251,191,36,1)',
            },
            colors: {
                primary: {
                    // TODO: Add light and dark versions
                    DEFAULT: '#FF3864',
                    dark: '#DB2B52',
                },
                dark: {
                    DEFAULT: '#2D0D40',
                    darker: '#170422',
                },
                transparent: 'transparent',
                white: colors.white,
                current: 'currentColor',
            },
            // refer to: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.white'),
                        fontSize: '1.25em',
                        blockquote: {
                            borderLeftColor: theme('colors.primary.DEFAULT'),
                            color: colors.gray[300],
                            fontWeight: '600',
                        },
                        a: {
                            color: theme('colors.primary.DEFAULT'),
                            '&:hover': {
                                color: theme('colors.pink[600]'),
                                cursor: 'pointer',
                            },
                        },
                        code: {
                            color: colors.gray[300],
                        },
                        strong: {
                            color: theme('colors.white'),
                        },
                        'figure figcaption': {
                            color: theme('colors.gray.400'),
                        },
                        h1: {
                            color: theme('colors.white'),
                        },
                        h2: {
                            color: theme('colors.white'),
                        },
                        h3: {
                            color: theme('colors.white'),
                        },
                        h4: {
                            color: theme('colors.white'),
                        },
                        h5: {
                            color: theme('colors.white'),
                        },
                        h6: {
                            color: theme('colors.white'),
                        },
                        '.lead': {
                            color: theme('colors.primary.DEFAULT'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
};
