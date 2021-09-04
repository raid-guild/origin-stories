import Head from 'next/head';
import { Fragment } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<Fragment>
			<Head>
				<title>Raid Guild Origins</title>
			</Head>
			<main className='grid grid-rows-3 h-screen'>
				<Navbar />
				<h1 className='font-display text-5xl text-primary'>
					Origin Stories Home
				</h1>
				<p className='font-sans text-base'>This page is about cool stuff</p>
				<Footer />
			</main>
		</Fragment>
	);
};

export default Home;
