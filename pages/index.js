import Head from 'next/head';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
	return (
		<Fragment>
			<Head>
				<title>Raid Guild Origins</title>
			</Head>
			<main className="bg-primary">
				<Header />
				<Footer />
			</main>
		</Fragment>
	);
};

export default Home;
