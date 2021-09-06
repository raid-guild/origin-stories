import { Fragment } from 'react/cjs/react.production.min';
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
								className='max-w-md h-[398px] bg-dark p-6 m-4 backdrop-blur rounded tracking-normal'>
								<p>{data.quote}</p>
								<div className='flex items-center justify-start space-x-2 mt-5'>
									<div className='rounded-full bg-primary h-12 w-12 flex items-center justify-center'>
										{/* <Image layout='fill' src={data.picture} alt='User picture' /> */}
									</div>
									<div>
										<h6>{data.name}</h6>
										<small>{data.username}</small>
									</div>
								</div>
								<div className='border-b-2 my-8'></div>
								<button
									type='button'
									className='bg-primary hover:bg-pink-700 text-white font-medium py-2 px-4 rounded items-center w-full'>
									Read my story
								</button>
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
};

export default CardList;
