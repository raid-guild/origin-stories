// const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)$/ });
// const withPlugins = require('next-compose-plugins');
// const mdxEnhanced = require('next-mdx-enhanced');

// module.exports = withMDX({
//     reactStrictMode: true,
//     pageExtensions: ['js', 'jsx', 'mdx', 'md'],
//     async redirects() {
//         return [
//             {
//                 source: '/origins',
//                 destination: '/',
//                 permanent: true,
//             },
//         ];
//     },
// });

// module.exports = withPlugins([
//     mdxEnhanced({
//         layoutPath: './templates',
//     }),
// ]);

module.exports = {
    images: {
        domains: ['placehold.it'],
    },
    // webpack: (config, { isServer }) => {
    //     // Fixes npm packages that depend on `fs` module
    //     if (!isServer) {
    //         config.node = {
    //             fs: 'empty',
    //         };
    //     }

    //     return config;
    // },
};
