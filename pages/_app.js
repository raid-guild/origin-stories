import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route}>
                <Component {...pageProps} />
            </motion.div>
        </AnimatePresence>
    );
}

export default MyApp;
