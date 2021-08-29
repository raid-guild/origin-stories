const withMDX = require('@next/mdx')({ extension: /\.(md|mdx)$/ });
module.exports = withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'md'],
});
