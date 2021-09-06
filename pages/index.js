import Image from "next/image";
import Head from "next/head";
import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import handHeart from "../public/images/hand_heart.png";
import clicksWorld from "../public/images/clicks_world.png";

const Home = () => {
  return (
    <Fragment>
      <Head>
      	<title>Raid Guild Origins</title>
      </Head>
      <main className="bg-primary">
        <Header>
          <div className="px-32">
            <div className="flex justify-around content-center pt-[148px]">
							<div>
								<h1 className="font-display text-5xl w-[36rem]">
									Every Raider Comes From Somewhere
								</h1>
									<p className="pt-4 leading-7 w-[525px]">
										Raiders come from all over the globe, with different backgrounds
										and perspectives. What were they doing before joining the Guild?
										What has their experience been like so far in Web3? What is life
										really like working in DAO? The answers are in our stories.
									</p>
							</div>
              <div className="flex">
								<div className="-m-10 w-64 relative h-full">
                <Image 
									className="object-cover object-center absolute inset-0 z-50" 
									src={clicksWorld} 
									alt="Click world" />
								</div>
								<div className="w-56 relative h-full">
                	<Image 
										className="object-cover object-center absolute inset-0" 
										src={handHeart} 
										alt="Hand on heart" />
								</div>
              </div>
            </div>
          </div>
        </Header>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Home;
