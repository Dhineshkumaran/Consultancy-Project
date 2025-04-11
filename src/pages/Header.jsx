import { useState, useEffect } from 'react';
import logo from '../assets/image.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="School Logo" className="h-12 md:h-14 mr-3" />
                        <h1 className="text-xl font-semibold">GMHSS</h1>
                    </div>

                    {/* Mobile toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-blue-600 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <nav className="flex items-center space-x-6 text-blue-900 font-medium">
                            <a href="#" className="hover:underline hover:text-blue-600">HOME</a>
                            <a href="/aboutus" className="hover:underline hover:text-blue-600">ABOUT US</a>
                            <a href="#" className="hover:underline hover:text-blue-600">INFRASTRUCTURE</a>
                            <a href="#" className="hover:underline hover:text-blue-600">ACADEMICS</a>
                            <a href="#" className="hover:underline hover:text-blue-600">COURSE</a>
                            <a href="#" className="hover:underline hover:text-blue-600">ALUMNI</a>
                            <a href="#" className="hover:underline hover:text-blue-600">ADMISSION</a>
                        </nav>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded">
                            CONTACT US
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-2 text-center">
                        <nav className="space-y-2 text-blue-900 font-medium">
                            <a href="#" className="block hover:underline hover:text-blue-600">HOME</a>
                            <a href="/aboutus" className="block hover:underline hover:text-blue-600">ABOUT US</a>
                            <a href="#" className="block hover:underline hover:text-blue-600">INFRASTRUCTURE</a>
                            <a href="#" className="block hover:underline hover:text-blue-600">ACADEMICS</a>
                            <a href="#" className="block hover:underline hover:text-blue-600">COURSE</a>
                            <a href="#" className="block hover:underline hover:text-blue-600">ALUMNI</a>
                            <a href="#" className="block hover:underline hover:text-blue-600">ADMISSION</a>
                            <button className="w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded">
                                CONTACT US
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;