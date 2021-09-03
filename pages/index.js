import { Fragment } from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Raid Guild Origins</title>
            </Head>
            <main>
                <h1 className="font-display text-5xl text-primary">
                    Origin Stories Home
                </h1>
                <p className="font-sans text-base">
                    This page is about cool stuff
                </p>
            </main>
        </Fragment>
    );
};

export default Home;
