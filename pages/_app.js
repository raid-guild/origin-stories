import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { DefaultSEO } from 'next-seo';

import '../styles/globals.css';

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Raid Guild Origins</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#FF3864" />
                <meta
                    name="description"
                    content="Learn the origin stories of raiders from Raid Guild! ⚔"
                />

                <meta property="og:title" content="Raid Guild Origins" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://portfolio.raidguild.org/"
                />
                <meta
                    property="og:description"
                    content="Learn the origin stories of members from Raid Guild! Hear their backgrounds: how they got into Web3, and Raid Guild; their thoughts on DAOs and more."
                />
                <meta property="og:image" content="/social-banner.png" />

                <meta property="twitter:card" content="summary_large_image" />
            </Head>

            {/* <DefaultSEO {...SEO} /> */}
            <AnimatePresence>
                <motion.div key={router.route}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
