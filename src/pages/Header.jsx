import logo from '../assets/image.png';

function Header() {
    return (
        <header className="flex items-center justify-between px-5 py-4 bg-white border-b border-gray-200">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={logo} alt="School Logo" className="h-16 mr-3" />
                <div className="school-name">
                    <h1 className="m-0 text-lg font-semibold">GMHSS</h1>
                </div>
            </div>

            {/* Navigation */}
            <nav className="text-center">
                <div>
                    <p className="text-sm">Courses | Alumni | Admission Registration</p>
                    <hr className="my-1 border-gray-300" />
                </div>
                <div className="space-x-4 font-medium">
                    <a href="#" className="hover:underline">HOME</a>
                    <a href="#" className="hover:underline">ABOUT US</a>
                    <a href="#" className="hover:underline">INFRASTRUCTURE</a>
                    <a href="#" className="hover:underline">ACADEMICS</a>
                    <a href="#" className="hover:underline">ADMISSION</a>
                </div>
            </nav>

            {/* Contact Button */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
                CONTACT US
            </button>
        </header>
    );
}

export default Header;