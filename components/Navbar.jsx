import { Fragment } from 'react';
import Image from 'next/image'
import rgLogo from '../public/images/raidguild_logo.svg'

const Navbar = () => {
	return (
		<Fragment>
			<nav className='flex items-center justify-between h-24 px-8'>
				<a className='grid grid-cols-2 items-center space-x-1' href='#'>
					<Image className='text-xl font-semibold border-r-2' src={rgLogo} alt="Raid Guild Logo" />
					<p className='font-medium'>Origins</p>
				</a>
				<div className='flex space-x-12'>
					<a
						className='hover:border-b-2 hover:pb-1'
						href='#'>
						Home
					</a>
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
