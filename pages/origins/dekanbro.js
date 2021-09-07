// For MVP purposes only!!!
import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import full_header from '../../public/images/full_header.png';
import profilePic from '../../public/images/profile-photo.jpg';

const Article = () => {
    return (
        <Fragment>
            <Head>
                <title>Raid Guid Origins | Dekan Brown</title>
            </Head>
            <div className="bg-dark-darker">
                <Header>
                    <div className="px-32 pt-16">
                        <Image
                            className="object-cover object-center absolute z-50"
                            src={full_header}
                            alt="Dekanbro header"
                        />
                    </div>
                </Header>
                <div className="grid grid-cols-3 xl:px-28 lg:px-24 md:px-20 gap-16 pt-8 h-full">
                    <main className="col-span-2 z-[999]">
                        <h1 className="font-sans">
                            The Origins of Dekan Brown
                        </h1>
                        <p className="text-base">
                            <span className="opacity-80">Interviewed by </span>
                            <span className="text-primary opacity-100">
                                @traviswyche
                            </span>
                        </p>

                        <div className="py-4 w-1/2">
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
                        </div>

                        <article className="prose prose-lg my-8 font-sans">
                            <blockquote>
                                “If you have momentum, a mission, a roadmap, and
                                it feels like you&apos;re pushing forward,
                                that&apos;s really good.”
                            </blockquote>

                            <figure className="flex flex-col">
                                <div className="relative w-auto h-64 rounded-sm overflow-hidden">
                                    <Image
                                        src={profilePic}
                                        className="object-cover object-center"
                                        layout="fill"
                                        alt="Picture of the author"
                                    />
                                </div>
                                <figcaption>Dekan looks out</figcaption>
                            </figure>

                            <div className="speaker flex gap-x-8">
                                <p className="text-yellow-500">Travis:</p>
                                <p>
                                    You&apos;re a member of numerous DAOs at
                                    this point and continue to spearhead some of
                                    them. Would you care to list them?
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-primary">Dekan:</p>
                                <p>
                                    I would count the permissioned DAOs. I own
                                    tokens in other token-multisig-snapshot DAOs
                                    and I vote in them sometimes, but I
                                    wouldn&apos;t necessarily list all of those.
                                    The main DAOs that I&apos;m active in are
                                    MetaCartel, RaidGuild, DAOhaus, and
                                    UberHausYou&apos;re a member of numerous
                                    DAOs at this point and continue to spearhead
                                    some of them. Would you care to list them?
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-yellow-500">Travis:</p>
                                <p>
                                    I&apos;m hoping that you might comment on
                                    that unique position that you are in, at the
                                    nexus of where all those DAOs meet. Maybe I
                                    could put it like this: What do you see as
                                    the relationship between those DAOs? How
                                    would you describe it?
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-primary">Dekan:</p>
                                <p>
                                    The relationship is very aligned. It all
                                    started with the foundational ideas
                                    discussed in MetaCartel. These are our
                                    cultural roots. At the first MCON, the
                                    original MetaCartel members met up to talk
                                    about our purpose and what we thought was
                                    really important in the space. These
                                    discussions all pointed to the importance of
                                    people interacting with other people, human
                                    collaboration, and supporting community
                                    building in this global space. The
                                    community&apos;s first manifesto was born
                                    out of that, which was focused on providing
                                    guidance & insight on community building and
                                    what community-first means. This has become
                                    the cultural bedrock for all of our DAOs.
                                    Community first is why we&apos;re here.
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-yellow-500">Travis:</p>
                                <p>
                                    What constitutes a healthy DAO? We&apos;ve
                                    talked about the human element and now
                                    it&apos;s being defined further as putting
                                    community-first, but is there anything that
                                    you would add concerning what constitutes a
                                    healthy, truly decentralized, autonomous
                                    organization?
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-primary">Dekan:</p>
                                <div className="flex flex-col">
                                    <p>
                                        To put specific metrics on things is
                                        hard. Some members have emphasized that
                                        observing the number of repeat proposals
                                        from the same group is a good way to
                                        evaluate community engagement.
                                        That&apos;s really big in DAOhaus,
                                        because we basically have a core team
                                        that continues contributing and they
                                        continue making proposals for what
                                        they&apos;re doing. It’s also important
                                        to consider how this internal group
                                        interacts with their edges and how they
                                        wield a gravity to pull their edges into
                                        the inner areas.
                                    </p>
                                    <p>
                                        I&apos;d say momentum and gravity are
                                        two really important things for DAOs.
                                        Often when I&apos;m using the word DAO I
                                        could interchange it with community,
                                        because they&apos;re so tied together.
                                        If you have momentum, a mission, a
                                        roadmap, and it feels like you&apos;re
                                        pushing forward, that&apos;s really
                                        good. If you&apos;re engaging the outer
                                        circles and bringing people into the
                                        inner circles, I think that could serve
                                        as a gauge of a DAO’s health.
                                    </p>
                                    <p>
                                        I often see metrics of how many people
                                        voted on a proposal or something and I
                                        think that&apos;s total bullshit. You
                                        can&apos;t measure community engagement
                                        through how many people vote. The voting
                                        mechanic is just one of the mechanisms
                                        and to rely on that metric alone is
                                        totally wrong.
                                    </p>
                                </div>
                            </div>

                            <p className="lead">
                                “If you have momentum, a mission, a roadmap, and
                                it feels like you&apos;re pushing forward,
                                that&apos;s really good.”
                            </p>

                            <div className="speaker flex gap-x-8">
                                <p className="text-yellow-500">Travis:</p>
                                <p>
                                    Yeah, that makes a lot of sense. Certainly
                                    in dealing with people and in building
                                    community, trust and loyalty are absolutely
                                    essential.
                                </p>
                            </div>
                            <div className="speaker flex gap-x-8">
                                <p className="text-primary">Dekan:</p>
                                <div className="flex flex-col">
                                    <p>
                                        Trust and loyalty are two of the most
                                        important things for me. It seems to
                                        vary with different people and I think
                                        that&apos;s why we still have a really
                                        tight alignment between MetaCartel,
                                        RaidGuild, and DAOhaus. There has always
                                        been a feeling in our community that we
                                        are the underdogs and it’s important to
                                        help leverage each other to become more
                                        visible to these groups that have
                                        seemingly infinite resources.
                                    </p>
                                    <p>
                                        The freelancer side of me learned the
                                        power of relationships, loyalty, and a
                                        strong network as investments that pay
                                        off 10x pretty easily over time through
                                        the value they generate. It’s not
                                        necessarily about monetary value. People
                                        remember when you&apos;re loyal and
                                        it&apos;s important for us to remember
                                        that sometimes there&apos;s an easy path
                                        to get exactly what you want, but
                                        you&apos;re already standing on
                                        someone&apos;s shoulders to get that
                                        upper hand.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </main>

                    <aside className="col-span-1 h-screen sticky top-4">
                        <div className="rounded-md bg-white bg-opacity-10 ring-2 ring-gray-400 ring-inset backdrop-filter backdrop-blur-xl p-6 shadow-lg flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <div className="rounded-full border-solid border-white border-opacity-50 border-2 relative h-20 w-20 overflow-hidden">
                                    <Image
                                        src={profilePic}
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
                                Dekan Brown
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
                    </aside>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
};

export default Article;
