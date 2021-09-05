// For MVP purposes only!!!
import Image from 'next/image';
import Head from 'next/head';
import { Fragment } from 'react';

import profilePic from '../../public/images/profile-photo.jpg';

const Article = () => {
    return (
        <Fragment>
            <Head>
                <title>Raid Guid Origins | Dekan Brown</title>
            </Head>
            <div className="bg-primary col-span-3 h-96">
                <h1>Big header blickey</h1>
            </div>
            <div className="bg-gradient-to-br from-dark to-gray-800 grid grid-cols-3 xl:px-28 lg:px-24 md:px-20 gap-16 pt-6 h-full">
                <main className="col-span-2">
                    <h1>
                        The Origins of Dekan Brown
                    </h1>
                    <p className="text-white opacity-70">
                        Interviewed by{' '}
                        <span className="text-primary">@traviswyche</span>
                    </p>

                    {/* TODO: REPLACE WITH TABLE */}
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Travis</p>
                        <p className="">
                            You&apos;re a member of numerous DAOs at this point
                            and continue to spearhead some of them. Would you
                            care to list them?
                        </p>
                    </p>
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Dekan</p>
                        <p>
                            I would count the permissioned DAOs. I own tokens in
                            other token-multisig-snapshot DAOs and I vote in
                            them sometimes, but I wouldn&apos;t necessarily
                            listall of those. The main DAOs that I&apos;m active
                            in are MetaCartel, RaidGuild, DAOhaus, and UberHaus
                        </p>
                    </p>
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Travis</p>
                        <p className="w-3/4">
                            I&apos;m hoping that you might comment on that
                            unique position that you are in, at the nexus of
                            where all those DAOs meet. Maybe I could put it like
                            this: What do you see as the relationship between
                            those DAOs? How would you describe it?
                        </p>
                    </p>
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Travis</p>
                        <p className="w-3/4">
                            You&apos;re a member of numerous DAOs at this point
                            and continue to spearhead some of them. Would you
                            care to list them?
                        </p>
                    </p>
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Dekan</p>
                        <p className="w-3/4">
                            I would count the permissioned DAOs. I own tokens in
                            other token-multisig-snapshot DAOs and I vote in
                            them sometimes, but I wouldn&apos;t necessarily list
                            all of those. The main DAOs that I&apos;m active in
                            are MetaCartel, RaidGuild, DAOhaus, and UberHaus
                        </p>
                    </p>
                    <p className="speaker flex gap-x-16 mt-6">
                        <p className="font-bold">Travis</p>
                        <p className="w-3/4">
                            I&apos;m hoping that you might comment on that
                            unique position that you are in, at the nexus of
                            where all those DAOs meet. Maybe I could put it like
                            this: What do you see as the relationship between
                            those DAOs? How would you describe it?
                        </p>
                    </p>
                </main>

                <aside className="col-span-1 h-screen sticky top-4">
                    <div className="rounded-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl p-6 shadow-lg flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <div className="rounded-full border-solid border-white border-opacity-50 border-2 relative h-20 w-20 overflow-hidden">
                                <Image
                                    src={profilePic}
                                    className="object-cover object-center"
                                    height={80}
                                    width={80}
                                    layout="fill"
                                    alt="Picture of the author"
                                />
                            </div>
                            <p className="rounded-md text-xs px-2 py-1 bg-white bg-opacity-30">
                                ⚔ RAIDER
                            </p>
                        </div>

                        <p className="text-white text-xl font-semibold tracking-tight mb-2">
                            Dekan Brown
                        </p>

                        <div className="flex flex-wrap gap-1 items-center mb-4 text-grey-200">
                            <p className="rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30">
                                Visual Design
                            </p>
                            <p className="rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30">
                                Frontend Dev
                            </p>
                            <p className="rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30">
                                UX Design
                            </p>
                            <p className="rounded-md text-xs px-2 py-1 bg-dark bg-opacity-30">
                                Smart Contract Dev
                            </p>
                        </div>

                        <p className="text-sm opacity-80">
                            With DAOs, you work closely with someone and you get
                            to see how they conduct themselves... and maybe
                            they&apos;re still anonymous, but you learn to trust
                            them and they build a reputation with you
                        </p>
                    </div>
                </aside>
            </div>
        </Fragment>
    );
};

export default Article;
