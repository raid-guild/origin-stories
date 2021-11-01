import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <meta charset="utf-8" />
                    <meta name="theme-color" content="#FF3864" />
                    <meta
                        name="description"
                        content="Learn the origin stories of raiders from Raid Guild! ⚔"
                    />
                    {/* Facebook */}
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://portfolio.raidguild.org/"
                    />
                    <meta
                        property="og:title"
                        content="Raid Guild Origin Stories"
                    />
                    <meta
                        property="og:description"
                        content="Learn the origin stories of members from Raid Guild! Hear their backgrounds: how they got into Web3, and Raid Guild; their thoughts on DAOs and more."
                    />
                    <meta property="og:image" content="/social-banner.png" />

                    {/* Twitter */}
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    <meta
                        property="twitter:url"
                        content="https://portfolio.raidguild.org/"
                    />
                    <meta
                        property="twitter:title"
                        content="Raid Guild Origin Stories"
                    />
                    <meta
                        property="twitter:description"
                        content="Learn the origin stories of members from Raid Guild!"
                    />
                    <meta
                        property="twitter:image"
                        content="/social-banner.png"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Uncial+Antiqua&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
