import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import clicksWorld from "../public/static/images/clicks_world.png";
import handHeart from "../public/static/images/hand_heart.png";
import mapImage from "../public/static/images/map.png";
import { getAllStories } from "../utils/data";

const Home = ({ stories }) => {
  const firstImage = {
    initial: {
      rotate: 2,
      x: 20,
    },
    tilt: {
      rotate: -2,
      x: 0,
      transition: { type: "spring", duration: 1.5, delay: 0.3 },
    },
  };
  const mainStories = stories.filter((story) => !story.subcard);
  const subStories = stories.filter((story) => story.subcard === "true");

  return (
    <>
      <Head>
        <title>Raid Guild Origins</title>
        <meta
          name="description"
          content="Learn the origin stories of members from Raid Guild! Hear their backgrounds: how they got into Web3, and Raid Guild; their thoughts on DAOs and more."
        />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twcard"
        />

        {/* Facebook */}
        <meta
          property="og:site_name"
          content="Raid Guild Origins"
          key="ogsitename"
        />
        <meta
          property="og:url"
          content="https://portfolio.raidguild.org/"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://origins.raidguild.org/social-banner.png"
          key="ogimage"
        />
        <meta property="og:title" content="Raid Guild Origins" key="ogtitle" />
        <meta
          property="og:description"
          key="ogdesc"
          content="Learn the origin stories of members from Raid Guild! Hear their backgrounds: how they got into Web3, and Raid Guild; their thoughts on DAOs and more."
        />
      </Head>
      <div className="bg-gradient-to-b from-dark via-primary to-primary">
        <div className="relative pb-16">
          <div className="relative z-10">
            <Header />
            <div className="flex flex-col lg:flex-row lg:justify-between px-6 md:px-32 pt-8 md:pt-16">
              <div>
                <h1 className="font-display text-5xl pt-4 md:pt-0 md:w-[36rem]">
                  Every Raider Comes From Somewhere
                </h1>

                <p className="pt-6 leading-7 md:w-[36rem]">
                  Raiders come from all over the globe, with different
                  backgrounds and perspectives. What were they doing before
                  joining the Guild? What has their experience been like so far
                  in Web3? What is life really like working in DAO? The answers
                  are in our stories.
                </p>
              </div>
              <div className="flex py-8 md:py-4">
                <motion.div
                  className="relative h-full"
                  initial="initial"
                  animate="tilt"
                  variants={firstImage}
                >
                  <Image
                    className="object-cover object-center absolute inset-0 z-50"
                    src={clicksWorld}
                    alt="Click world"
                    priority="true"
                  />
                </motion.div>
                <div className="relative h-full">
                  <Image
                    className="object-cover object-center absolute inset-0"
                    src={handHeart}
                    alt="Hand on heart"
                    priority="true"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Background Image */}
          <Image
            src={mapImage}
            className="object-cover object-bottom absolute inset-0 z-0"
            layout="fill"
            draggable="false"
            alt="Raid map"
            priority="true"
          />
          <div className="absolute inset-0  z-0"></div>
        </div>

        {/* Cards */}

        <div className="container md:mx-auto mb-10 px-6 md:px-24 ">
          <h2 className="pb-4">Origin Stories</h2>
          <CardList stories={mainStories} />
        </div>

        <div className="bg-dark-maron">
          <div className="container md:mx-auto pb-20 pt-10 px-6 md:px-24">
            <h2 className="pb-4">Show me more stories</h2>
            <CardList stories={subStories} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps(context) {
  const allStories = getAllStories();

  return {
    props: {
      stories: allStories.map(({ data, content, slug }) => ({
        ...data,
        content,
        slug,
      })),
    },
  };
}
