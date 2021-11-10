import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { DefaultSEO } from 'next-seo';
// import SEO from '../next-seo.config';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head prefix="og: https://ogp.me/ns#" lang="en">
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="preload"
                        href="/static/fonts/OpenSans-Bold.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/static/fonts/OpenSans-Regular.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/static/fonts/OpenSans-RegularItalic.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/static/fonts/OpenSans-SemiBold.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/static/fonts/OpenSans-SemiBoldItalic.ttf"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/static/fonts/UncialAntiqua.ttf"
                        as="font"
                        crossOrigin=""
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
