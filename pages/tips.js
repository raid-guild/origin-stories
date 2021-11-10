import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import mapImage from '../public/static/images/map.png';

const FreelancerTips = () => {
	return (
		<>
			<Head>
				<title>Freelancer Tips | Raid Guild Origins</title>
			</Head>
			<div className='bg-dark-darker'>
				<div className='h-[100vh] relative'>
					<div className='relative z-10'>
						<Header />
						<div className='flex justify-center px-6 md:px-24 md:pt-24'>
							<div>
								<p>🙃</p>
								<h1 className='mt-10 md:mt-0 md:w-[36rem]'>
									Well, this is awkward
								</h1>
								<p>Did someone leave this is in the navbar?... </p>
								<p>If you&apos;re seeing this page, ✨no u aren&apos;t✨</p>
							</div>
						</div>
					</div>

					{/* Background Image */}
					<Image
						src={mapImage}
						className='object-cover object-bottom absolute inset-0 z-0'
						layout='fill'
						draggable='false'
						alt='Raid map'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-dark via-primary opacity-80 z-0'></div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default FreelancerTips;
