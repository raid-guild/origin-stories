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
			<Navbar />
			<main>
				<div>
						<div className='bg-map pt-10 pl-28 pr-72 h-screen'>
								<h1 className='font-display text-5xl text-white w-587'>
										EVERY RAIDER COMES FROM SOMEWHERE
								</h1>
								<p className='font-sans text-base text-white pt-20 leading-7'>Raiders come from all over the globe, with different backgrounds and perspectives. What were they doing before joining the Guild? What has their experience been like so far in Web3? What is life really like working in DAO? The answers are in our stories.</p>
						</div>
						<div></div>
				</div>
				<Footer />
			</main>
		</Fragment>
	);
};

export default Home;
