import Image from 'next/image';

import Navbar from './Navbar';

import mapImage from '../public/images/map.png';

const Header = ({ children }) => {
    return (
        <header className="col-span-3 h-[650px] relative">
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
            </div>
            {children}
        </header>
    );
};

export default Header;
