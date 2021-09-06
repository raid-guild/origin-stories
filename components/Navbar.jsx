import Image from 'next/image'
import rgLogo from '../public/images/raidguild_logo.svg'
import Link from 'next/link';
import { Fragment } from 'react';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='pt-[52px] pl-32 flex items-center justify-between h-24 px-8 pr-[110px]'>
				<Link href='/'>
					<Image className='text-xl font-semibold border-r-2' src={rgLogo} alt="Raid Guild Logo" />
						<div className='text-xl font-semibold border-r-2 border-white'>
							Logo
						</div>
						<span className='font-medium'>Origins</span>
					</a>
				</Link>
				<div className='flex space-x-12'>
					<Link href='/'>
						<a className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'>
							Home
						</a>
					</Link>
					<Link href='/origins/dekanbro'>
						<a className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'>
							Origin Stories
						</a>
					</Link>
					<Link href='/'>
						<a className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'>
							Freelancer Tips
						</a>
					</Link>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
