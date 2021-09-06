// For MVP purposes only!!!
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Header from '../../components/Header';
import full_header from '../../public/images/full_header.png';
import profilePic from '../../public/images/profile-photo.jpg';

const Article = () => {
	return (
		<Fragment>
			<Head>
				<title>Raid Guid Origins | Dekan Brown</title>
			</Head>
			<div className='bg-dark-darker'>
				<Header>
          <div className="px-32 pt-24">
						<Image
							className='object-cover object-center absolute z-50'
							src={full_header}
							alt='Dekanbro header'
						/>
					</div>
				</Header>
        <div className="grid grid-cols-3 xl:px-28 lg:px-24 md:px-20 gap-16 pt-48 h-full -mt-48">
					<main className='col-span-2 z-[999]'>
						<h1 className='font-sans'>The Origins of Dekan Brown</h1>
						<p className='text-base'>
							<span className='opacity-80'>Interviewed by </span>
							<span className='text-primary opacity-100'>@traviswyche</span>
						</p>

						<article className='prose prose-lg mt-8 font-sans'>
							<blockquote>
								“If you have momentum, a mission, a roadmap, and it feels like
								you&apos;re pushing forward, that&apos;s really good.”
							</blockquote>

							<h4>Travis</h4>
							<p>
								You&apos;re a member of numerous DAOs at this point and continue
								to spearhead some of them. Would you care to list them?
							</p>

							<h4>Dekan</h4>
							<p>
								I would count the permissioned DAOs. I own tokens in other
								token-multisig-snapshot DAOs and I vote in them sometimes, but I
								wouldn&apos;t necessarily listall of those. The main DAOs that
								I&apos;m active in are MetaCartel, RaidGuild, DAOhaus, and
								UberHaus
							</p>

							<figure className='flex flex-col'>
								<div className='relative w-auto h-64 rounded-sm overflow-hidden'>
									<Image
										src={profilePic}
										className='object-cover object-center'
										layout='fill'
										alt='Picture of the author'
									/>
								</div>
								<figcaption>Dekan looks out</figcaption>
							</figure>
							<div className='speaker flex gap-x-16'>
								<p className='text-pink-400'>Travis</p>
								<p>
									You&apos;re a member of numerous DAOs at this point and
									continue to spearhead some of them. Would you care to list
									them?
								</p>
							</div>
							<div className='speaker flex gap-x-16'>
								<p className='text-red-400'>Dekan</p>
								<p>
									I would count the permissioned DAOs. I own tokens in other
									token-multisig-snapshot DAOs and I vote in them sometimes, but
									I wouldn&apos;t necessarily listall of those. The main DAOs
									that I&apos;m active in are MetaCartel, RaidGuild, DAOhaus,
									and UberHausYou&apos;re a member of numerous DAOs at this
									point and continue to spearhead some of them. Would you care
									to list them?
								</p>
							</div>
						</article>
						{/* TODO: REPLACE WITH TABLE */}
						<p className='speaker flex gap-x-16 mt-6 leading-8'>
							<p className='font-bold'>Travis</p>
							<p className=''>
								You&apos;re a member of numerous DAOs at this point and continue
								to spearhead some of them. Would you care to list them?
							</p>
						</p>
						<p className='speaker flex gap-x-16 mt-6'>
							<p className='font-bold'>Dekan</p>
							<p>
								I would count the permissioned DAOs. I own tokens in other
								token-multisig-snapshot DAOs and I vote in them sometimes, but I
								wouldn&apos;t necessarily listall of those. The main DAOs that
								I&apos;m active in are MetaCartel, RaidGuild, DAOhaus, and
								UberHaus
							</p>
						</p>
						<p className='speaker flex gap-x-16 mt-6'>
							<p className='font-bold'>Travis</p>
							<p className='w-3/4'>
								I&apos;m hoping that you might comment on that unique position
								that you are in, at the nexus of where all those DAOs meet.
								Maybe I could put it like this: What do you see as the
								relationship between those DAOs? How would you describe it?
							</p>
						</p>
						<p className='speaker flex gap-x-16 mt-6'>
							<p className='font-bold'>Travis</p>
							<p className='w-3/4'>
								You&apos;re a member of numerous DAOs at this point and continue
								to spearhead some of them. Would you care to list them?
							</p>
						</p>
						<p className='speaker flex gap-x-16 mt-6'>
							<p className='font-bold'>Dekan</p>
							<p className='w-3/4'>
								I would count the permissioned DAOs. I own tokens in other
								token-multisig-snapshot DAOs and I vote in them sometimes, but I
								wouldn&apos;t necessarily list all of those. The main DAOs that
								I&apos;m active in are MetaCartel, RaidGuild, DAOhaus, and
								UberHaus
							</p>
						</p>
						<p className='speaker flex gap-x-12 mt-6'>
							<p className='font-bold'>Travis</p>
							<p className='w-3/4'>
								I&apos;m hoping that you might comment on that unique position
								that you are in, at the nexus of where all those DAOs meet.
								Maybe I could put it like this: What do you see as the
								relationship between those DAOs? How would you describe it?
							</p>
						</p>
					</main>

					<aside className='col-span-1 h-screen sticky top-4'>
						<div className='rounded-md bg-white bg-opacity-10 ring-2 ring-gray-400 ring-inset backdrop-filter backdrop-blur-xl p-6 shadow-lg flex flex-col'>
							<div className='flex justify-between items-center mb-4'>
								<div className='rounded-full border-solid border-white border-opacity-50 border-2 relative h-20 w-20 overflow-hidden'>
									<Image
										src={profilePic}
										className='object-cover object-center'
										layout='fill'
										alt='Picture of the author'
									/>
								</div>
								<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-30'>
									⚔ RAIDER
								</p>
							</div>

							<p className=' text-xl font-semibold font-sans tracking-tight mb-2'>
								Dekan Brown
							</p>

							<div className='flex flex-wrap gap-1 items-center mb-4 text-grey-200'>
								<p className='rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30'>
									Visual Design
								</p>
								<p className='rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30'>
									Frontend Dev
								</p>
								<p className='rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30'>
									UX Design
								</p>
								<p className='rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30'>
									Smart Contract Dev
								</p>
							</div>

							<p className='text-sm opacity-70 leading-6'>
								With DAOs, you work closely with someone and you get to see how
								they conduct themselves... and maybe they&apos;re still
								anonymous, but you learn to trust them and they build a
								reputation with you
							</p>
						</div>
					</aside>
				</div>
			</div>
		</Fragment>
	);
};

export default Article;
