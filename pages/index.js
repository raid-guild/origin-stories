import Head from 'next/head';
import { Fragment } from 'react';
import Card from '../components/Card';
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
				<h1 className="text-primary">Origin Stories Home</h1>
				<p className="text-gray-800">This page is about cool stuff</p>
				<Card />
                    </div>
                    <div></div>
                </div>
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
