import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react/cjs/react.production.min';
import profilePic from '../public/images/profile-photo.jpg';
import dataList from '../utils/data';

const CardList = () => {
	return (
		<Fragment>
			<div className='container mx-auto'>
				<div className='flex justify-evenly items-center flex-wrap'>
					{dataList.map((data, index) => {
						return (
							<div
								key={index}
								className={`card ${index === 0 ? 'featured-raider-card' : ''}`}>
								<div
									className={`grid ${
										index === 0 ? 'grid-rows-5' : 'grid-rows-4'
									} grid-flow-col gap-4 h-full`}>
									{index === 0 ? (
										<div className='flex justify-start items-center row-span-1 col-span-3'>
											<StarIcon className='h-5 w-5 text-yellow-400 shadow-featured' />
											<p className='text-yellow-400 font-semibold uppercase mb-2 ml-2'>
												Featured Raider
											</p>
										</div>
									) : null}
									<p className='row-span-2 col-span-3 line-clamp-5'>
										&quot;{data.quote}&quot;
									</p>
									<div className='flex items-center justify-start space-x-2 border-b-2 border-indigo-200 border-opacity-50 row-span-1 col-span-3'>
										<div className='rounded-full bg-primary h-12 w-12 relative overflow-hidden'>
											{index === 0 ? (
												<Image
													src={profilePic}
													className='object-cover object-center'
													layout='fill'
													alt='Picture of the author'
												/>
											) : null}
										</div>
										<div>
											<p className='card-user'>{data.name}</p>
											<small>{data.username}</small>
										</div>
									</div>
									<Link href={index === 0 ? '/origins/dekanbro' : '/'}>
										<a className='w-full row-span-1 col-span-3'>
											<button
												type='button'
												className='bg-primary hover:bg-pink-700 text-white font-medium py-2 px-4 h-14 rounded items-center w-full'>
												Read my story
											</button>
										</a>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default CardList;
