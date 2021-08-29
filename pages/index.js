import { Fragment } from 'react';
import Head from 'next/head';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Raid Guild Origins</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <main>
                <h1 className="font-display text-5xl text-raidRed">
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
