import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CardSmall({
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
      className="card normal-raider-card"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition="transition"
      whileHover={router.route === "/" ? "hover" : ""}
      variants={card}
    >
      <>
        <div className="flex items-center justify-start space-x-2 w-[384px]">
          <Image
            src={`/static/images/story/${picture}`}
            className="rounded-full"
            height="50px"
            width="50px"
            alt="Picture of the Interviewee"
            objectFit="cover"
            quality={70}
          />
          <div>
            <div>
              <p className="card-user">{name}</p>
            </div>

            <div className="text-primary-info mb-2">
              <span>{roles}</span>
            </div>
          </div>
        </div>
        <Link href={"/origins/" + slug}>
          <button
            type="button"
            className="transition-all duration-300 flex items-center mt-2 "
          >
            Read my story
            <svg
              className="w-5 h-5 rotate-180 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/* <Image
              src={`/static/images/arrow.png`}
              className=""
              layout="fixed"
              width={15}
              height={15}
              alt="Picture of the author"
            /> */}
          </button>
        </Link>
      </>
    </div>
  );
}
