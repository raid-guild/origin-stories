import { Fragment } from 'react';

const Card = () => {
	return (
		<Fragment>
			<div className='max-w-sm bg-dark filter contrast-150 saturate-125 opacity-80 backdrop-blur p-6 rounded tracking-normal'>
				<p>
					&quot;I would count the permissioned DAOs. I own tokens in other
					token-multisig-snapshot DAOs and I vote in them sometimes, but I
					wouldn't necessarily list all of those. The main DAOs that I'm active
					in are MetaCartel, RaidGuild, DAOhaus, and UberHaus.&quot;
				</p>
				<div className='flex items-center justify-start space-x-4 mt-5'>
					<div className='rounded-full bg-primary h-12 w-12 flex items-center justify-center'>
						Circle
					</div>
					<div>
						<p>Jordan</p>
						<small>@jordanlovesred</small>
					</div>
				</div>
				<div className='border-b-2 my-8'></div>
				<button className='bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded items-center w-full'>
					Read my story
				</button>
			</div>
		</Fragment>
	);
};
export default Card;
