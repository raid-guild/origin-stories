import Link from 'next/link';
import { Fragment } from 'react';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='flex items-center justify-between h-24 px-8'>
				<Link href='/'>
					<a className='grid grid-cols-2 items-center space-x-2'>
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
