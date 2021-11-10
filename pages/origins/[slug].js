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
                <meta name="description" content={bio || excerpt} />
                {/* Twitter */}
                <meta
                    property="twitter:card"
                    content="summary_large_image"
                    key="twcard"
                />
                {/* Facebook */}
                <meta
                    property="og:site_name"
                    content="Raid Guild Origins"
                    key="ogsitename"
                />
                <meta
                    property="og:url"
                    content="https://portfolio.raidguild.org/"
                    key="ogurl"
                />
                <meta
                    property="og:image"
                    content={`/story/${header}`}
                    key="ogimage"
                />
                content=
                {`https://raidguild-origins.vercel.app/static/images/story/${header}`}
                <meta
                    property="og:title"
                    content={`${name} | Raid Guild Origins`}
                    key="ogtitle"
                />
                <meta
                    property="og:description"
                    content={bio || excerpt}
                    key="ogdesc"
                />
            </Head>
            <div className="bg-dark-darker">
                <div className="relative">
                    <div className="relative z-10">
                        <Header />
                        <div className="px-4 md:px-40 lg:px-56 pt-2">
                            <NextLink href="/" passRef>
                                <a className="flex gap-2 items-center hover:underline transition-all w-28">
                                    <svg
                                        class="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <div>All stories</div>
                                </a>
                            </NextLink>
                            {/* <div className="px-4 md:px-40 lg:px-56 pt-4"> */}
                            <div className="aspect-w-11 aspect-h-5 filter drop-shadow-lg max-h-[650px] mt-4">
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
                                    }}
                                >
                                    <Image
                                        className="object-cover object-center rounded-md"
                                        src={`/static/images/story/${header}`}
                                        alt={`${name} header illustration`}
                                        layout="fill"
                                        objectFit="cover"
                                        sizes="70vw"
                                        priority
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <Image
                        src={`/static/images/story/${header}`}
                        className="object-cover object-bottom absolute inset-0 z-0 blur-lg opacity-40"
                        layout="fill"
                        sizes="70vw"
                        quality="60"
                        draggable="false"
                        alt="Raid map"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark-darker z-0"></div>
                </div>
                <div className="flex justify-center">
                    <div className="px-8 md:px-20 lg:px-36 w-full xl:w-2/3">
                        <div
                            className={`rounded-full ring-4 ${
                                featured ? 'ring-yellow-400' : 'ring-white'
                            } relative -mt-8 xl:-mt-14 h-20 w-20 xl:h-32 xl:w-32 z-10 overflow-hidden`}
                        >
                            <Image
                                src={`/static/images/story/${picture}`}
                                className="object-cover object-center"
                                layout="fill"
                                alt={name}
                            />
                        </div>

                        <div className="py-6">
                            <div className="flex flex-col justify-center items-start">
                                <div className="flex items-center gap-2">
                                    <h2>{name}</h2>
                                    {featured ? (
                                        <span className="rounded-md text-xs text-opacity-80 tracking-wider px-2 py-0.5 bg-yellow-400 bg-opacity-30">
                                            ⚔ FEATURED RAIDER
                                        </span>
                                    ) : (
                                        <span className="rounded-md text-xs text-white text-opacity-80 tracking-wider px-2 py-0.5 bg-primary bg-opacity-30">
                                            ⚔ MEMBER
                                        </span>
                                    )}
                                </div>
                                <p className="text-sm font-normal font-sans text-white text-opacity-70">
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
                            <p className="max-w-screen-md text-base text-white leading-7 text-opacity-70 pt-4 tracking-wide">
                                {bio}
                            </p>
                            <hr className="mt-8 xl:mt-10 border-t-2 border-white border-opacity-20" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center px-4 md:px-40 lg:px-56 h-full">
                    <main className="z-[999] px-6">
                        <h2 className="text-3xl xl:text-4xl font-sans">
                            My Origin Story
                        </h2>
                        <p className="text-base pt-2">
                            <span className="opacity-70">
                                — From a talk with{' '}
                            </span>
                            <span className="text-primary opacity-100">
                                {interviewer}
                            </span>
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

                        <article className="prose prose my-8 font-sans">
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
