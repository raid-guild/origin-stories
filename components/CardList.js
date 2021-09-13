import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import profilePic from '../public/images/profile-photo.jpg';
import dataList from '../utils/data';



const CardList = () => {
	return (
		<Fragment>
			{/* <div className="container mx-auto"> */}
			<div className='flex justify-evenly items-center flex-wrap'>
				{dataList.map((data, index) => {
					return (
						<div
							key={index}
							className={`card ${index === 0 ? 'featured-raider-card' : ''}`}>
							{index === 0 ? (
								<div className='flex justify-start items-center'>
									<p className='text-yellow-400 text-xs font-semibold uppercase mb-2 tracking-widest'>
										⭐ Featured Raider
									</p>
								</div>
							) : null}
							<p className='text-base line-clamp-4 mt-4'>
								&quot;{data.quote}&quot;
							</p>
							<div className='flex items-center justify-start space-x-2 border-b-2 my-4 pb-4 border-indigo-200 border-opacity-50'>
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
									<small className='opacity-70'>{data.username}</small>
								</div>
							</div>
							<Link href={index === 0 ? '/origins/dekanbro' : '/'}>
								<a className='w-full mt-2'>
									<button
										type='button'
										className='transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 h-14 rounded items-center w-full font-semibold hover:from-primary hover:to-purple-700'>
										Read my story
									</button>
								</a>
							</Link>
						</div>
					);
				})}
			</div>
			{/* </div> */}
		</Fragment>
	);
};
// const CardList = () => {
// 	return (
// 		<Fragment>
// 			<div className='container mx-auto'>
// 				<div className='flex justify-evenly items-center flex-wrap'>
// 					{dataList.map((data, index) => {
// 						return (
// 							<div
// 								key={index}
// 								className={`card ${index === 0 ? 'featured-raider-card' : ''}`}>
// 								<div
// 									className={`grid ${
// 										index === 0 ? 'grid-rows-5' : 'grid-rows-4'
// 									} grid-flow-col gap-4 h-full`}>
// 									{index === 0 ? (
// 										<div className='flex justify-start items-center row-span-1 col-span-3'>
// 											{/* <StarIcon className='h-5 w-5 text-yellow-400 shadow-featured' /> */}
// 											{/* <div className="relative">
// 												<Image
// 													src={starIcon}
// 													className="text-yellow-400 shadow-featured object-fill object-center"
// 													alt="Star icon"
// 													layout="fill"
// 													width="2rem"
// 													height="2rem"
// 												/>
// 											</div> */}
// 											<p className='text-yellow-400 text-xs font-semibold uppercase mb-2 ml-2'>
// 												Featured Raider
// 											</p>
// 										</div>
// 									) : null}
// 									<p className='row-span-2 col-span-3 line-clamp-5'>
// 										&quot;{data.quote}&quot;
// 									</p>
// 									<div className='flex items-center justify-start space-x-2 border-b-2 py-8 border-indigo-200 border-opacity-50 row-span-1 col-span-3'>
// 										<div className='rounded-full bg-primary h-12 w-12 relative overflow-hidden'>
// 											{index === 0 ? (
// 												<Image
// 													src={profilePic}
// 													className='object-cover object-center'
// 													layout='fill'
// 													alt='Picture of the author'
// 												/>
// 											) : null}
// 										</div>
// 										<div>
// 											<p className='card-user'>{data.name}</p>
// 											<small>{data.username}</small>
// 										</div>
// 									</div>
// 									<Link href={index === 0 ? '/origins/dekanbro' : '/'}>
// 										<a className='w-full row-span-1 col-span-3'>
// 											<button
// 												type='button'
// 												className='bg-primary hover:bg-pink-700 text-white font-medium py-2 px-4 h-14 rounded items-center w-full'>
// 												Read my story
// 											</button>
// 										</a>
// 									</Link>
// 								</div>
// 							</div>
// 						);
// 					})}
// 				</div>
// 			</div>
// 		</Fragment>
// 	);
// };

export default CardList;
