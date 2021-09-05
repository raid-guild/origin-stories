import Image from 'next/image';
import { Fragment } from 'react/cjs/react.production.min';
import { dataList } from '../utils/data';

const CardList = () => {
	return (
		<Fragment>
			<div className='flex justify-between items-center flex-wrap'>
				{dataList.map((data, index) => {
					<div
						key={index}
						className='max-w-sm bg-white border-2 p-6 rounded tracking-normal'>
						<p>{data.quote}</p>
						<div className='flex items-center justify-start space-x-4 mt-5'>
							<Image src={data.picture} alt='Picture of user' />
							<div>
								<p>{data.name}</p>
								<small>{data.username}</small>
							</div>
						</div>
						<div className='border-b-2 my-8'></div>
						<button className='bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded items-center w-full'>
							Read my story
						</button>
					</div>;
				})}
			</div>
		</Fragment>
	);
};

export default CardList;
