import { Fragment } from 'react';

const Navbar = () => {
	return (
		<Fragment>
			<nav className='flex items-center justify-between h-24 px-8 bg-primary bg-opacity-50'>
				<a className='grid grid-cols-2 items-center space-x-2' href='#'>
					<div className='text-xl font-semibold border-r-2 border-gray-800'>
						Logo
					</div>
					<span className='font-medium'>Origins</span>
				</a>
				<div className='flex space-x-12'>
					<a
						className='font-sans text-base hover:border-b-2 hover:pb-1 hover:border-red-700'
						href='#'>
						Home
					</a>
					<a
						className='font-sans text-base hover:border-b-2 hover:pb-1 hover:border-red-700'
						href='#'>
						Origin Stories
					</a>
					<a
						className='font-sans text-base hover:border-b-2 hover:pb-1 hover:border-red-700'
						href='#'>
						Freelancer Tips
					</a>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
