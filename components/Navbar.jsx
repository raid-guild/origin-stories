import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import rgLogo from '../public/images/raidguild_logo.svg';

const Navbar = () => {
    return (
        <Fragment>
            <nav className="flex flex-col h-24 p-4">
                <div className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <a className="flex items-center space-x-2">
                            <div className="h-14 w-24 relative">
                                <Image
                                    src={rgLogo}
                                    alt="Raid Guild Logo"
                                    layout="fill"
                                />
                            </div>
                            <span className="font-medium text-xs tracking-widest border-l-2 border-white uppercase pl-2">
                                Origins
                            </span>
                        </a>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </div>
                <div className="flex flex-col bg-dark bg-opacity-60 rounded-md justify-around shadow-sm">
                    <ul className="list-none h-full">
                        <Link href="/" passHref>
                            <li className="transition-all ease-out duration-300 active:bg-primary hover:bg-primary hover:bg-opacity-50 hover:cursor-pointer p-4 rounded-t-md">
                                <a className="transition ease-out duration-200 font-sans text-base border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                                    Home
                                </a>
                            </li>
                        </Link>
                        <Link href="/origins/dekanbro" passHref>
                            <li className="transition-all ease-out duration-300 active:bg-primary hover:bg-primary hover:bg-opacity-50 hover:cursor-pointer p-4">
                                <a className="transition ease-out duration-200 font-sans text-base pb-2 mb-2 border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                                    Origin Stories
                                </a>
                            </li>
                        </Link>
                        <Link href="/" passHref>
                            <li className="transition-all ease-out duration-300 active:bg-primary hover:bg-primary hover:bg-opacity-50 hover:cursor-pointer p-4 rounded-b-md">
                                <a className="transition ease-out duration-200 font-sans text-base pb-1 mb-2 border-b-2 border-transparent hover:border-b-2 hover:border-red-700">
                                    Freelancer Tips
                                </a>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default Navbar;
