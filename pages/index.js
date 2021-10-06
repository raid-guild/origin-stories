import Head from 'next/head';
import Image from 'next/image';

import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Header from '../components/Header';

import clicksWorld from '../public/images/clicks_world.png';
import handHeart from '../public/images/hand_heart.png';
import mapImage from '../public/images/map.png';

import { getAllStories } from '../utils/data';

const Home = ({ stories }) => {
    return (
        <>
            <Head>
                <title>Raid Guild Origins</title>
            </Head>
            <div className="bg-dark-darker">
                <div className="h-[650px] relative">
                    <div className="relative z-10">
                        <Header />
                        <div className="flex flex-col md:flex-row md:justify-between px-6 md:px-24 md:pt-24">
                            <div>
                                <h1 className="font-display text-5xl mt-10 md:mt-0 md:w-[36rem]">
                                    Every Raider Comes From Somewhere
                                </h1>

                                <p className="pt-6 leading-7 md:w-[36rem]">
                                    Raiders come from all over the globe, with
                                    different backgrounds and perspectives. What
                                    were they doing before joining the Guild?
                                    What has their experience been like so far
                                    in Web3? What is life really like working in
                                    DAO? The answers are in our stories.
                                </p>
                            </div>
                            <div className="flex">
                                <div className="relative h-full">
                                    <Image
                                        className="object-cover object-center absolute inset-0 z-50"
                                        src={clicksWorld}
                                        alt="Click world"
                                    />
                                </div>
                                <div className="relative h-full">
                                    <Image
                                        className="object-cover object-center absolute inset-0"
                                        src={handHeart}
                                        alt="Hand on heart"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Image */}
                    <Image
                        src={mapImage}
                        className="object-cover object-bottom absolute inset-0 z-0"
                        layout="fill"
                        draggable="false"
                        alt="Raid map"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary opacity-80 z-0"></div>
                </div>

                {/* Cards */}
                <div className="container md:mx-auto mb-10 px-6">
                    <CardList stories={stories} />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;

export async function getStaticProps(context) {
    const allStories = getAllStories();

    return {
        props: {
            stories: allStories.map(({ data, content, slug }) => ({
                ...data,
                content,
                slug,
            })),
        },
    };
}
