import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CardList({ stories }) {
    const featuredStories = stories.sort((a, b) => {
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    });
    return (
        <>
            <div className="grid lg:grid-cols-3 justify-items-center">
                {featuredStories.map(
                    (
                        {
                            name,
                            picture,
                            username,
                            content,
                            excerpt,
                            slug,
                            featured,
                        },
                        index
                    ) => {
                        return (
                            <motion.div
                                key={index}
                                className={`card ${
                                    featured === true
                                        ? 'featured-raider-card'
                                        : ''
                                }`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.8,
                                    delay: index / 10,
                                }}
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
                                    <div className="rounded-full bg-primary h-12 w-12 relative overflow-hidden">
                                        <Image
                                            src={picture}
                                            className="object-cover object-center"
                                            layout="fill"
                                            alt={name}
                                        />
                                    </div>
                                    <div className="pl-2">
                                        <p className="card-user">{name}</p>
                                        <small className="opacity-70">
                                            {username}
                                        </small>
                                    </div>
                                </div>
                                <Link
                                    href={'/origins/' + slug}
                                    className="w-full mt-2"
                                    passHref
                                >
                                    <button
                                        type="button"
                                        className="transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 h-14 rounded items-center w-full font-semibold hover:from-primary hover:to-purple-700"
                                    >
                                        Read my story
                                    </button>
                                </Link>
                            </motion.div>
                        );
                    }
                )}
            </div>
        </>
    );
}
