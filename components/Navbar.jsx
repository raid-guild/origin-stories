import { Fragment } from 'react';
import Link from 'next/link';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='flex items-center justify-between h-24 px-8'>
				<a className='grid grid-cols-2 items-center space-x-2' href='#'>
					<div className='text-xl font-semibold border-r-2 border-gray-800'>
						Logo
					</div>
					<span className='font-medium'>Origins</span>
				</a>
				<div className='flex space-x-12'>
					<Link
						className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'
						href='/'>
						Home
					</Link>
					<a
						className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'
						href='/origins/dekanbro'>
						Origin Stories
					</a>
					<a
						className='font-sans text-base pb-1 border-b-2 border-opacity-0 hover:border-b-2 hover:border-red-700 hover:border-opacity-100'
						href='#'>
						Freelancer Tips
					</a>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
