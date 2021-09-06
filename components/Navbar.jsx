import { Fragment } from 'react';
import Image from 'next/image'
import rgLogo from '../public/images/raidguild_logo.svg'
import Link from 'next/link';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='pt-[52px] pl-32 flex items-center justify-between h-24 px-8 pr-[110px]'>
				<a className='grid grid-cols-2 items-center space-x-1' href='#'>
					<Image className='text-xl font-semibold border-r-2' src={rgLogo} alt="Raid Guild Logo" />
					<p className='font-medium'>Origins</p>
				</a>
				<div className='flex space-x-12'>
					<Link
						className='border-solid border-b-2 pb-1 border-transparent hover:border-white'
						href='/'>
						Home
					</Link>
					<a
						className='hover:border-b-2 hover:pb-1'
						href='#'>
						Origin Stories
					</a>
					<a
						className='hover:border-b-2 hover:pb-1'
						href='#'>
						Freelancer Tips
					</a>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
