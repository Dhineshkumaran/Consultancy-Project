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
                    {/* Logo and Toggle */}
                    <div className="flex items-center justify-between w-full md:w-auto">
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
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        <nav className="flex items-center space-x-6 text-blue-900 font-medium">
                            <a href="/" className="hover:underline hover:text-blue-600">HOME</a>
                            <a href="/about-us" className="hover:underline hover:text-blue-600">ABOUT US</a>
                            <a href="/infrastructure" className="hover:underline hover:text-blue-600">INFRASTRUCTURE</a>
                            <a href="/academics" className="hover:underline hover:text-blue-600">ACADEMICS</a>
                            <a href="/admissions" className="hover:underline hover:text-blue-600">ADMISSIONS</a>
                            <a href="/gallery" className="hover:underline hover:text-blue-600">GALLERY</a>
                            <a href="/alumni-panel" className="relative hover:underline hover:text-blue-600 font-semibold text-blue-800">
                              ALUMNI ✨
                              <span className="absolute -top-2 -right-3 text-xs text-white bg-red-500 px-1.5 py-0.5 rounded-full animate-pulse">
                                NEW
                              </span>
                            </a>
                            <a href="/careers" className="hover:underline hover:text-blue-600">CAREERS</a>
                            <a href="/contact-us" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded">
                                CONTACT US
                            </a>
                        </nav>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-2 text-center px-4 py-4 bg-white rounded-lg shadow-md">
                        <nav className="space-y-2 text-blue-900 font-medium">
                            <a href="/" className="block animate-fade-in delay-[100ms] hover:underline hover:text-blue-600">HOME</a>
                            <a href="/about-us" className="block animate-fade-in delay-[200ms] hover:underline hover:text-blue-600">ABOUT US</a>
                            <a href="/infrastructure" className="block animate-fade-in delay-[300ms] hover:underline hover:text-blue-600">INFRASTRUCTURE</a>
                            <a href="/academics" className="block animate-fade-in delay-[400ms] hover:underline hover:text-blue-600">ACADEMICS</a>
                            <a href="/admissions" className="block animate-fade-in delay-[500ms] hover:underline hover:text-blue-600">ADMISSIONS</a>
                            <a href="/gallery" className="block animate-fade-in delay-[600ms] hover:underline hover:text-blue-600">GALLERY</a>
                            <a href="/alumni-panel" className="block animate-fade-in delay-[800ms] bg-blue-100 text-blue-800 font-semibold rounded-full px-4 py-1 hover:bg-blue-200">
                              ALUMNI ✨
                            </a>
                            <a href="/careers" className="block animate-fade-in delay-[850ms] hover:underline hover:text-blue-600">CAREERS</a>
                            <a href="/contact-us" className="block w-full mt-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-5 rounded animate-fade-in delay-[900ms]">
                                CONTACT US
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;