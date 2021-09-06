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
    </Fragment>
  );
};

export default Header;
