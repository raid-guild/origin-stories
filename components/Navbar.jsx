import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import rgLogo from '../public/images/raidguild_logo.svg';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="pt-[52px] px-[110px] flex items-center justify-between h-24">
                <Link href="/">
                    <a className="flex items-center space-x-2">
                        <Image src={rgLogo} alt="Raid Guild Logo" />
                        <span className="font-medium text-xs tracking-widest border-l-2 border-white uppercase pl-2">
                            Origins
                        </span>
                    </a>
                </Link>
                <div className="flex space-x-12">
                    <Link href="/">
                        <a className="transition ease-out duration-200 font-sans text-base pb-1 border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                            Home
                        </a>
                    </Link>
                    <Link href="/origins/dekanbro">
                        <a className="transition ease-out duration-200 font-sans text-base pb-1 border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                            Origin Stories
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="transition ease-out duration-200 font-sans text-base pb-1 border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                            Freelancer Tips
                        </a>
                    </Link>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
