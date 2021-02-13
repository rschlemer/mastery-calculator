import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
    const [show, setShow] = useState(false);
    function hamburger() {
        setShow(!show);
    }
    return (
        <nav className="dark:bg-gray800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 felx items-center sm:hidden">

                        {/* mobile menu buttom */}
                        <button onClick={hamburger} className="inline-flex items-center justify-center p-2 rounded-md dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

                            <span className="sr-only">Open main menu</span>

                            {/* Hamburger Icon */}
                            <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                        </button>
                    </div>

                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            {/* image */}
                            <h1 className="dark:text-white font-large">Melvor Calculations</h1>
                        </div>

                        {/* page links - visible at > 640px */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/">
                                    <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Melvor Calculator</a>
                                </Link>
                                <Link href="/probabilities">
                                    <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Probabilities</a>
                                </Link>
                                <Link href="/bank">
                                    <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bank</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar when on mobile */}
            <div className={show ? "block" : "hidden"}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/">
                        <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Melvor Calculator</a>
                    </Link>
                    <Link href="/probabilities">
                        <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Probabilities</a>
                    </Link>
                    <Link href="/bank">
                        <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Bank</a>
                    </Link>
                </div>
            </div>
            <hr className="border-black dark:border-white" />
        </nav>

    )
}