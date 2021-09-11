import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import rgLogo from '../public/images/raidguild_logo.svg';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Origin Stories', href: '/origins/dekanbro' },
    { name: 'Freelancer Tips', href: '/tips' },
];

const combineClasses = (...classes) => classes.filter(Boolean).join(' ');

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);
    const router = useRouter();

    const toggleNav = () => setNavOpen(!navOpen);

    return (
        <nav className="flex flex-col h-24 px-6 pt-4 w-vw">
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

                <button
                    type="button"
                    onClick={toggleNav}
                    className={combineClasses(
                        navOpen ? 'bg-opacity-100' : 'bg-opacity-30',
                        'px-4 py-2 md:hidden rounded-lg bg-dark-darker'
                    )}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={combineClasses(
                            navOpen ? 'opacity-0 hidden' : 'opacity-100 block',
                            'h-6 w-6 transition-all duration-200'
                        )}
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={combineClasses(
                            navOpen
                                ? 'opacity-100 block rotate-0'
                                : 'opacity-0 hidden rotate--45',
                            'h-6 w-6 transition-all duration-500'
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile nav */}
            <ul
                className={combineClasses(
                    navOpen
                        ? 'visible opacity-100 translate-y-4 translate-x-0'
                        : 'invisible opacity-0 translate-y-0 translate-x-1',
                    'relative list-none transition-all duration-300 h-auto flex flex-col bg-dark-darker rounded-md justify-around shadow-md z-10 md:hidden'
                )}
            >
                {navigation.map((navItem, index) => (
                    <Link href={navItem.href} key={navItem.name} passHref>
                        <li
                            className={combineClasses(
                                router.asPath === navItem.href
                                    ? 'bg-primary-dark'
                                    : 'text-white text-opacity-70',
                                index === 0
                                    ? 'rounded-t-md'
                                    : index === navigation.length - 1
                                    ? 'rounded-b-md'
                                    : '',
                                navOpen ? 'opacity-100' : 'opacity-0',
                                'transition-all ease-in-out duration-200 active:bg-primary p-4'
                            )}
                        >
                            {navItem.name}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};

export default Header;
