import { Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import CardList from '../components/CardList';
import Footer from '../components/Footer';
import Header from '../components/Header';

import clicksWorld from '../public/images/clicks_world.png';
import handHeart from '../public/images/hand_heart.png';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Raid Guild Origins</title>
            </Head>
            <main className="bg-dark-darker">
                <Header>
                    <div className="px-32">
                        <div className="flex lg:flex-row flex-col justify-around content-center pt-24">
                            <div>
                                <h1 className="font-display text-5xl w-[36rem]">
                                    Every Raider Comes From Somewhere
                                </h1>
                                <p className="pt-6 leading-7 w-[36rem]">
                                    Raiders come from all over the globe, with
                                    different backgrounds and perspectives. What
                                    were they doing before joining the Guild?
                                    What has their experience been like so far
                                    in Web3? What is life really like working in
                                    DAO? The answers are in our stories.
                                </p>
                            </div>
                            <div className="flex">
                                <div className="w-64 relative h-full">
                                    <Image
                                        className="object-cover object-center absolute inset-0 z-50"
                                        src={clicksWorld}
                                        alt="Click world"
                                    />
                                </div>
                                <div className="w-56 relative h-full">
                                    <Image
                                        className="object-cover object-center absolute inset-0"
                                        src={handHeart}
                                        alt="Hand on heart"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Header>
                <div className="container -mt-16 mb-10 px-32">
                    <CardList />
                </div>
                <Footer />
            </main>
        </Fragment>
    );
};

export default Home;
