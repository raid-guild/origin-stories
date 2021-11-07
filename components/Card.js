import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';

export default function Card({ story, index, inView, maxLength }) {
    const [show, setShow] = useState();

    useEffect(() => {
        inView ? setShow(show, true) : setShow(show, true);
    }, [inView]);

    const { name, picture, username, excerpt, slug, featured } = story;

    const card = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            y: [0, 20],
            transition: {
                type: 'tween',
                duration: 0.8,
                delay: index / maxLength,
            },
        },
        hover: { scale: 1.08, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className={`card ${
                featured === true ? 'featured-raider-card' : ''
            }`}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            transition="transition"
            whileHover="hover"
            variants={card}
        >
            {featured === true ? (
                <div className="flex justify-start items-center">
                    <p className="text-yellow-400 text-xs font-semibold uppercase mb-2 tracking-widest">
                        ⭐ Featured Raider
                    </p>
                </div>
            ) : null}
            <p className="text-base line-clamp-4 mt-4">
                &quot;{excerpt.substr(0, 100)}...&quot;
            </p>
            <div className="flex items-center justify-start space-x-2 border-b-2 my-4 pb-4 border-indigo-200 border-opacity-50">
                <div className="relative overflow-hidden">
                    <Image
                        src={`/static/images/story/${picture}`}
                        className="rounded-full"
                        height="50px"
                        width="50px"
                        alt="Picture of the Interviewee"
                        objectFit="cover"
                        quality={70}
                    />
                </div>
                <div>
                    <p className="card-user">{name}</p>
                    <small className="opacity-70">{username}</small>
                </div>
            </div>
            <Link href={'/origins/' + slug}>
                <button
                    type="button"
                    className="transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 h-14 rounded items-center w-full font-semibold hover:from-primary hover:to-purple-700 mt-2"
                >
                    Read my story
                </button>
            </Link>
        </motion.div>
    );
}
