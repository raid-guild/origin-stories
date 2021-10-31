import Head from 'next/head';
import Image from 'next/image';

import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { getAllStories } from '../../utils/data';

export default function Article({
    name,
    date,
    header,
    username,
    picture,
    interviewer,
    content,
}) {
    return (
        <>
            <Head>
                <title>{name} | Raid Guid Origins</title>
            </Head>
            <div className="bg-dark-darker">
                <div className="h-[280px] md:h-[650px] relative">
                    <div className="relative z-10">
                        <Header />
                        <div className="px-4 md:px-12 py-8">
                            <div className="h-48 w-auto md:h-[450px] relative radius-2 block">
                                <Image
                                    className="object-cover object-center"
                                    src={header}
                                    alt={name}
                                    layout="fill"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary opacity-80 z-0"></div>
                </div>
                <div className="flex justify-center md:px-20 lg:px-24 xl:px-28 gap-16 pt-8 h-full">
                    <main className="self-center z-[999] px-12">
                        <h1 className="font-sans">The Origins of {name}</h1>
                        <p className="text-base">
                            <span className="opacity-80">Interviewed by </span>
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

                    {/* <aside className="col-span-1 h-screen sticky top-4">
                        <div className="rounded-md bg-white bg-opacity-10 ring-2 ring-gray-400 ring-inset backdrop-filter backdrop-blur-xl p-6 shadow-lg flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <div className="rounded-full border-solid border-white border-opacity-50 border-2 relative h-20 w-20 overflow-hidden">
                                    <Image
                                        src={picture}
                                        className="object-cover object-center"
                                        layout="fill"
                                        alt="Picture of the author"
                                    />
                                </div>
                                <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-30">
                                    ⚔ RAIDER
                                </p>
                            </div>

                            <p className=" text-xl font-semibold font-sans tracking-tight mb-2">
                                {name}
                            </p>

                            <div className="flex flex-wrap gap-1 items-center mb-4 text-grey-200">
                                <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-10">
                                    Visual Design
                                </p>
                                <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-10">
                                    Frontend Dev
                                </p>
                                <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-10">
                                    UX Design
                                </p>
                                <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-10">
                                    Smart Contract Dev
                                </p>
                            </div>

                            <p className="text-sm opacity-70 leading-6 line-clamp-5">
                                With DAOs, you work closely with someone and you
                                get to see how they conduct themselves... and
                                maybe they&apos;re still anonymous, but you
                                learn to trust them and they build a reputation
                                with you
                            </p>
                        </div>
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
