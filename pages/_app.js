import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
	return (
		<AnimatePresence>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<motion.div key={router.route}>
				<Component {...pageProps} />
			</motion.div>
		</AnimatePresence>
	);
}

export default MyApp;
