import { Fragment } from 'react';
import Head from 'next/head';

const Home = () => { 
    return (
        <Fragment>
            <Head>
                <title>Raid Guild Origins</title>
            </Head>
            <main className="bg-map h-screen">
                <h1 className="font-display text-5xl text-primary">
                    Origin Stories Home
                </h1>
                <h1 className="font-display text-5xl text-primary">
                    Every Raider Comes from somewhere
                </h1>
                <p className="font-sans text-base">
                Raiders come from all over the globe, with different backgrounds and perspectives. What were they doing before joining the Guild? What has their experience been like so far in Web3? What is life really like working in DAO? The answers are in our stories.
                </p>
            </main>
        </Fragment>
    );
};

export default Home;
