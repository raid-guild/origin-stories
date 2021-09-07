import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import rgLogo from '../public/images/raidguild_logo.svg';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='pt-[52px] px-[110px] flex items-center justify-between h-24'>
				<Link href='/'>
					<a className='flex items-center space-x-2'>
						<Image
							className='text-xl font-semibold '
							src={rgLogo}
							alt='Raid Guild Logo'
						/>
						<span className='font-medium uppercase pl-2 border-l-2 border-white'>
							Origins
						</span>
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
