import { Fragment } from 'react';

export const Card = () => {
	return (
		<Fragment>
			<div className='max-w-sm bg-dark backdrop-blur p-6 rounded tracking-normal'>
				<p>
					&quot;I would count the permissioned DAOs. I own tokens in other
					token-multisig-snapshot DAOs and I vote in them sometimes, but I
					wouldn't necessarily list all of those. The main DAOs that I'm active
					in are MetaCartel, RaidGuild, DAOhaus, and UberHaus.&quot;
				</p>
				<div className='flex items-center justify-start space-x-4 mt-5'>
					<div className='rounded-full bg-primary h-12 w-12 flex items-center justify-center'></div>
					<div>
						<h6>Jordan</h6>
						<small>@jordanlovesred</small>
					</div>
				</div>
				<div className='border-b-2 my-8'></div>
				<button
					type='button'
					className='bg-primary hover:bg-pink-700 text-white font-medium py-2 px-4 rounded items-center w-full'>
					Read my story
				</button>
			</div>
		</Fragment>
	);
};

export const FeaturedCard = () => {
	return (
		<Fragment>
			<div className='max-w-md bg-dark ring ring-yellow-400 ring-inset backdrop-blur p-6 rounded tracking-normal'>
				<div className='flex justify-start items-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5 text-yellow-400 shadow-featured'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
					<p className='text-yellow-400 font-medium uppercase mb-2 ml-2'>
						Featured Raider
					</p>
				</div>
				<p>
					&quot;I would count the permissioned DAOs. I own tokens in other
					token-multisig-snapshot DAOs and I vote in them sometimes, but I
					wouldn&apos;t necessarily list all of those. The main DAOs that
					I&paos;m active in are MetaCartel, RaidGuild, DAOhaus, and
					UberHaus.&quot;
				</p>
				<div className='flex items-center justify-start space-x-4 mt-5'>
					<div className='rounded-full bg-primary h-12 w-12 flex items-center justify-center'></div>
					<div>
						<h6>Jordan</h6>
						<small>@jordanlovesred</small>
					</div>
				</div>
				<div className='border-b-2 my-8'></div>
				<button
					type='button'
					className='bg-primary hover:bg-pink-700 text-white font-medium py-2 px-4 rounded items-center w-full'>
					Read my story
				</button>
			</div>
		</Fragment>
	);
};
