import { motion } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import NextLink from 'next/link';
import { useInView } from 'react-intersection-observer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getAllStories } from '../../utils/data';

export default function Article({
	name,
	date,
	header,
	username,
	bio,
	links,
	featured,
	picture,
	excerpt,
	interviewer,
	content,
}) {
	const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
	return (
		<>
			<Head>
				<title>{name} | Raid Guid Origins</title>
				<meta name='description' content={bio || excerpt} />
				{/* Twitter */}
				<meta
					property='twitter:card'
					content='summary_large_image'
					key='twcard'
				/>
				{/* Facebook */}
				<meta
					property='og:site_name'
					content='Raid Guild Origins'
					key='ogsitename'
				/>
				<meta
					property='og:url'
					content='https://portfolio.raidguild.org/'
					key='ogurl'
				/>
				<meta
					property='og:image'
					content={`https://raidguild-origins.vercel.app/social/${header}`}
					key='ogimage'
				/>
				content=
				{`https://raidguild-origins.vercel.app/static/images/story/${header}`}
				<meta
					property='og:title'
					content={`${name} | Raid Guild Origins`}
					key='ogtitle'
				/>
				<meta property='og:description' content={bio || excerpt} key='ogdesc' />
			</Head>
			<div className='bg-dark-darker'>
				<div className='relative'>
					<div className='relative z-10'>
						<Header />
						<div className='px-6 lg:px-20 xl:px-56 pt-2'>
							<NextLink href='/' passRef>
								<a className='flex gap-2 items-center hover:underline transition-all w-28'>
									<svg
										className='w-4 h-4'
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z'
											clipRule='evenodd'></path>
									</svg>
									<div>All stories</div>
								</a>
							</NextLink>
							{/* <div className="px-4 md:px-40 lg:px-44 pt-4"> */}
							<div className='aspect-w-11 aspect-h-5 filter drop-shadow-lg max-h-[650px] mt-4'>
								<motion.div
									animate={{
										y: 0,
										rotate: 0,
										opacity: 1,
									}}
									initial={{
										y: -100,
										rotate: -6,
										opacity: 0,
									}}
									transition={{
										duration: 1.2,
										delay: 1,
									}}>
									<Image
										className='object-cover object-center rounded-md'
										src={`/static/images/story/${header}`}
										alt={`${name} header illustration`}
										layout='fill'
										objectFit='cover'
										sizes='70vw'
										priority='true'
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<Image
						src={`/static/images/story/${header}`}
						className='object-cover object-bottom absolute inset-0 z-0 blur-lg opacity-40'
						layout='fill'
						sizes='70vw'
						quality='60'
						draggable='false'
						alt={`${name} background illustration`}
						priority='true'
					/>
					<div className='absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark-darker z-0'></div>
				</div>
				<div className='flex justify-center'>
					<div className='px-12 lg:px-40 xl:px-80 w-screen'>
						<div
							className={`rounded-full ring-4 ring-opacity-60 ${
								featured ? 'ring-yellow-400' : 'ring-white'
							} relative -mt-8 xl:-mt-14 h-24 w-24 lg:h-32 lg:w-32 z-10 overflow-hidden`}>
							<Image
								src={`/static/images/story/${picture}`}
								className='object-cover object-center'
								layout='fill'
								alt={name}
							/>
						</div>

						<div className='py-6'>
							<div className='flex flex-col justify-center items-start'>
								<div className='flex flex-wrap items-center gap-2'>
									<h3>{name}</h3>
									{featured ? (
										<span className='rounded-md text-xs text-opacity-80 tracking-wider px-2 py-0.5 bg-yellow-400 bg-opacity-30'>
											⚔ FEATURED RAIDER
										</span>
									) : (
										<span className='rounded-md text-xs text-white text-opacity-80 tracking-wider px-2 py-0.5 bg-primary bg-opacity-30'>
											⚔ MEMBER
										</span>
									)}
								</div>
								<p className='text-sm font-normal font-sans text-white text-opacity-70 pt-2 md:pt-0'>
									{username}
								</p>
							</div>
							{/* <div className='flex flex-wrap py-2 gap-2 items-center mb-4 text-grey-200'>
							<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
								Visual Design
							</p>
							<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
								Frontend Dev
							</p>
							<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
								UX Design
							</p>
							<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
								Smart Contract Dev
							</p>
						</div> */}

							<p className='max-w-screen-md text-base text-white leading-7 text-opacity-70 pt-4 pb-2 tracking-wide'>
								{bio}
							</p>
							<div className='flex gap-4'>
								{links && links.length > 0
									? links.map((link, index) => (
											<a
												key={index}
												target='_blank'
												className='text-primary hover:underline flex items-end gap-1'
												href={link}>
												<svg
													className='h-4 w-4 fill-current text-white text-opacity-50'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path d='M9.94221 12.9215C9.87521 12.9215 9.80621 12.9115 9.73921 12.8945C8.60921 12.5765 7.64221 11.9085 6.94421 10.9625C6.11221 9.83746 5.76821 8.45446 5.97621 7.06946C6.18421 5.68446 6.91821 4.46446 8.04421 3.63146L11.5742 1.02346C13.8962 -0.692541 17.1842 -0.200541 18.9042 2.12346C19.7342 3.25046 20.0792 4.63346 19.8712 6.01846C19.6632 7.40346 18.9282 8.62346 17.8012 9.45646L16.3212 10.5505C15.9882 10.7965 15.5172 10.7255 15.2712 10.3925C15.0252 10.0585 15.0952 9.58846 15.4292 9.34246L16.9092 8.24746C17.7122 7.65546 18.2362 6.78446 18.3852 5.79746C18.5332 4.80946 18.2872 3.82246 17.6952 3.01946C16.4702 1.36346 14.1232 1.00946 12.4652 2.23546L8.93521 4.84346C8.13321 5.43646 7.60921 6.30746 7.46021 7.29346C7.31021 8.28346 7.55721 9.26846 8.15021 10.0715C8.64821 10.7465 9.33721 11.2215 10.1422 11.4485C10.5422 11.5625 10.7752 11.9765 10.6622 12.3765C10.5702 12.7065 10.2682 12.9235 9.94021 12.9235L9.94221 12.9215Z' />
													<path d='M5.25222 20.0304C3.64222 20.0304 2.05522 19.2954 1.02722 17.9054C0.195218 16.7784 -0.148782 15.3954 0.0592178 14.0114C0.267218 12.6274 1.00222 11.4064 2.12922 10.5734L3.60722 9.47945C3.94122 9.23445 4.41222 9.30445 4.65722 9.63745C4.90222 9.97045 4.83422 10.4414 4.50022 10.6874L3.02022 11.7824C2.21722 12.3754 1.69422 13.2464 1.54522 14.2324C1.39722 15.2224 1.64222 16.2074 2.23522 17.0104C3.46022 18.6674 5.80522 19.0204 7.46522 17.7954L10.9932 15.1874C12.6512 13.9624 13.0032 11.6174 11.7782 9.95745C11.2802 9.28345 10.5912 8.80745 9.78622 8.58145C9.38622 8.46845 9.15322 8.05445 9.26622 7.65445C9.37822 7.25445 9.79422 7.02445 10.1922 7.13245C11.3222 7.45045 12.2882 8.11845 12.9862 9.06445C14.7032 11.3884 14.2102 14.6764 11.8862 16.3944L8.35622 19.0024C7.42322 19.6954 6.33322 20.0284 5.25122 20.0284L5.25222 20.0304Z' />
												</svg>
												{link
													.replace(/^(\w+:\/\/)?(\w*\.)?/i, '')
													.replace(/\/+$/, '')}
											</a>
									  ))
									: ''}
							</div>

							<hr className='my-8 xl:my-10 border-t-2 border-white border-opacity-20' />
						</div>
					</div>
				</div>
				<div className='flex justify-center h-full'>
					<main className='z-[999] px-8'>
						<h2 className='text-3xl xl:text-4xl font-sans'>My Origin Story</h2>
						<p className='text-base pt-2'>
							<span className='opacity-70'>— From a talk with </span>
							<span className='text-primary opacity-100'>{interviewer}</span>
						</p>

						{/* <div className="py-4 w-1/2">
                            <p>Listen the episode 👂</p>
                            <div className="flex justify-between text-sm text-grey-darker">
                                <p>0:42</p>
                                <p>4:20</p>
                            </div>
                            <div className="mt-1">
                                <div className="h-1 bg-gray-300 rounded-full">
                                    <div className="w-1/5 h-1 bg-gray-500 rounded-full relative">
                                        <span className="w-4 h-4 bg-primary absolute right-0 bottom-0 -mb-1 rounded-full shadow"></span>
                                    </div>
                                </div>
                            </div>
                        </div> */}

						<article className='prose prose my-8 font-sans'>
							<MDXRemote {...content} />
						</article>
					</main>

					{/* <aside
						ref={ref}
						className='order-1 xl:order-2 xl:h-screen xl:sticky top-4 px-6 lg:px-0 lg:pb-0'>
						<Card
							cardProps={{
								picture,
								name,
								excerpt,
								bio,
								featured,
								inView,
							}}
						/>
					</aside> */}
				</div>
				<Footer />
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const allStories = getAllStories();

	const { data, content } = allStories.find(
		(story) => story.slug === params.slug
	);
	const mdxSource = await serialize(content);

	return {
		props: { ...data, content: mdxSource },
	};
}

export async function getStaticPaths() {
	return {
		paths: getAllStories().map((story) => ({
			params: {
				slug: story.slug,
			},
		})),
		fallback: false,
	};
}
