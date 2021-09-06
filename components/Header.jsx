import { Children, Fragment } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import mapImage from "../public/images/map.png";

const Header = ({children}) => {
  return (
    <Fragment>
      <div className="col-span-3 h-[700px] relative">
        <Image
          src={mapImage}
          className="object-cover object-bottom absolute inset-0"
          layout="fill"
          draggable="false"
          alt="Picture of the author"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary opacity-80"></div>
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </div>
      {/* <div className="w-full h-96 relative">
        <h1 className="font-display text-5xl w-587">
          EVERY RAIDER COMES FROM SOMEWHERE
        </h1>
        <div className="bg-gradient-to-b from-dark via-primary w-full h-full absolute" />
        <Image
          layout="fill"
          src={mapImage}
          className="object-cover object-center w-full bg-top"
          alt="background-map-image"
        />
      </div>
      <p className="pt-20 leading-7">
        Raiders come from all over the globe, with different backgrounds and
        perspectives. What were they doing before joining the Guild? What has
        their experience been like so far in Web3? What is life really like
        working in DAO? The answers are in our stories.
      </p> */}
    </Fragment>
  );
};

export default Header;
