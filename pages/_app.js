import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { DefaultSEO } from 'next-seo';

import '../styles/globals.css';

import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            {/* <DefaultSEO {...SEO} /> */}
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <AnimatePresence>
                <motion.div key={router.route}>
                    <Component {...pageProps} />
                </motion.div>
            </AnimatePresence>
        </>
    );
}

export default MyApp;
