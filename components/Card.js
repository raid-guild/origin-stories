import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Card({
  cardProps: {
    name,
    slug,
    header,
    bio,
    username,
    featured,
    picture,
    excerpt,
    index,
    inView,
    maxLength,
    roles,
    subcard,
  },
}) {
  const router = useRouter();
  const [show, setShow] = useState();
  useEffect(() => {
    inView ? setShow(show, true) : setShow(show, true);
  }, [inView]);
  const card = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      y: [0, 20],
      transition: {
        type: "tween",
        duration: 0.8,
        delay: index / maxLength,
      },
    },
    hover: { scale: 1.08, transition: { duration: 0.3 } },
  };

  return (
    <div
      className={` ${
        router.route === "/origins/[slug]" ? "story-card" : "card"
      } ${featured ? "featured-raider-card" : "normal-raider-card"}`}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition="transition"
      whilehover={router.route === "/" ? "hover" : ""}
      variants={card}
    >
      {featured && router.route !== "/origins/[slug]" ? (
        <div className="flex justify-start items-center">
          <p className="text-yellow-400 text-xs font-semibold uppercase mb-2 tracking-widest">
            ⭐ Featured Raider
          </p>
        </div>
      ) : null}
      {router.route === "/origins/[slug]" ? (
        <div className="flex flex-col justify-center items-center">
          <div
            className={`rounded-full border-solid ${
              featured ? "border-yellow-400" : "border-white"
            } border-opacity-50 border-2 relative h-20 w-20 overflow-hidden`}
          >
            <Image
              src={`/static/images/story/${picture}`}
              className="object-cover object-center"
              layout="fill"
              alt="Picture of the author"
            />
          </div>
          <p className="text-xl font-semibold font-sans tracking-tight my-2">
            {name}
          </p>
          {featured ? (
            <span className="rounded-md text-xs font-bold px-2 py-1 bg-yellow-400 bg-opacity-30">
              ⚔ FEATURED RAIDER
            </span>
          ) : (
            <span className="rounded-md text-xs font-bold px-2 py-1 bg-white bg-opacity-30">
              ⚔ RAIDER
            </span>
          )}
          <p className="text-sm text-white text-opacity-70 text-center leading-6 pt-4">
            {bio}
          </p>
          {/* <div className='flex flex-wrap gap-1 items-center mb-4 text-grey-200'>
				<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
					Visual Design
				</p>
				<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
					Frontend Dev
				</p>
				<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
					UX Design
				</p>
				<p className='rounded-md text-xs px-2 py-1 bg-white bg-opacity-10'>
					Smart Contract Dev
				</p>
			</div> */}
        </div>
      ) : (
        <>
          <span className="text-primary-info mb-2 text-sm">
            <span>{roles.toUpperCase()}</span>
          </span>
          <div className="flex items-center justify-start space-x-2 ">
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
              <small className="text-opacity-80">{username}</small>
            </div>
          </div>
          <p className="text-sm text-white text-opacity-60 italic line-clamp-4 my-4 pb-6 border-b border-white border-opacity-60">
            &quot;{excerpt.substr(0, 100)}...&quot;
          </p>
          <Link href={"/origins/" + slug}>
            <button
              type="button"
              className="transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 h-14 rounded items-center w-full font-semibold hover:from-primary hover:to-purple-700 mt-2"
            >
              Read my story
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
