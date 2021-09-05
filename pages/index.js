import Head from 'next/head';
import { Fragment } from 'react';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<Fragment>
			<Head>
				<title>Raid Guild Origins</title>
			</Head>
			<Navbar />
			<main>
				<h1 className='font-display text-5xl text-primary'>
					Origin Stories Home
				</h1>
				<p className='font-sans text-base'>This page is about cool stuff</p>
				<CardList />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
