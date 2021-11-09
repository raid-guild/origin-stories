import { motion } from 'framer-motion';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import mapImage from '../../public/static/images/map.png';
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
                <meta name="description" content={excerpt} />
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
                    content={excerpt}
                    key="ogdesc"
                />
            </Head>
            <div className="bg-dark-darker">
                <div className="relative">
                    <div className="relative z-10">
                        <Header />
                        <div className="px-4 md:px-40 lg:px-56 pt-4">
                            {/* <div className="px-4 md:px-40 lg:px-56 pt-4"> */}
                            <div className="aspect-w-11 aspect-h-5 filter drop-shadow-lg max-h-[650px]">
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
                    {/* <Image
                        src={mapImage}
                        className="object-cover object-bottom absolute inset-0 z-0"
                        layout="fill"
                        sizes="70vw"
                        quality="60"
                        draggable="false"
                        alt="Raid map"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary opacity-80 z-0"></div> */}
                </div>
                <div className="flex flex-wrap justify-center md:px-16 lg:px-20 gap-16 pt-8 h-full">
                    <main className="order-2 xl:order-1 self-center z-[999] px-6">
                        <h1 className="font-sans">
                            The Origin Story of {name}
                        </h1>
                        <p className="text-base">
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

                        <article className="prose prose-lg my-8 font-sans">
                            <MDXRemote {...content} />
                        </article>
                    </main>

                    <aside
                        ref={ref}
                        className="order-1 xl:order-2 xl:h-screen xl:sticky top-4 px-6 lg:px-0 lg:pb-0"
                    >
                        <Card
                            props={{
                                picture,
                                name,
                                excerpt,
                                bio,
                                featured,
                                inView,
                            }}
                        />
                    </aside>
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
