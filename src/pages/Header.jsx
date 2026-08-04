import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/school-logo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null); // for mobile submenu

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => isOpen && setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },

    {
      name: "About Us",
      path: "/about-us",
      submenu: [
        { name: "About GMHSS", path: "/about-us" },
        { name: "Principal's Message", path: "/principal-message" },
        { name: "Correspondent's Message", path: "/correspondent-message" },
        { name: "Secretary's Message", path: "/secretary-message" },
      ],
    },

    { name: "Infrastructure", path: "/infrastructure" },
  //   {
  //   name: "Academic",
  //   path: "/academics",
  //   submenu: [
  //     // { name: "Global Magazines", path: "/magazine" },
  //     { name: "Student's Corner", path: "/students-corner" },
  //     { name: "Achiever's Section", path: "/achievers-section" },
  //   ],
  // },
    { name: "Admission", path: "/admissions" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Alumni Panel", path: "/alumni-panel" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md border-b border-gray-200">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center justify-between">
        {/* Logo + School Name */}
        <Link to="/" className="flex items-center gap-2 md:gap-4">
          <img
            src={logo}
            alt="School Logo"
            className="h-12 w-12 md:h-16 md:w-16 object-cover rounded-full border-2 border-blue-900"
          />

          <div className="flex flex-col">
            {/* Mobile short name */}
            <h1 className="text-sm font-bold text-blue-900 leading-tight md:hidden">
              Global School
            </h1>

            {/* Desktop full name */}
            <h1 className="hidden md:block text-2xl font-bold text-blue-900 leading-tight">
              Global Matriculation Higher Secondary School
            </h1>

            <p className="hidden md:block text-sm text-gray-600 leading-tight">
              Affiliated to TN Board, Kangayam Road
            </p>
          </div>
        </Link>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/admissions"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded-md shadow transition"
          >
            Online Admission
          </a>
          <a
            href="/fees"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-md shadow transition"
          >
            Online Fees Payment
          </a>
          <a
            href="/qr"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md shadow transition"
          >
            QR Code
          </a>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-700"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="bg-[#34206f] text-white hidden md:block">
        <nav className="max-w-7xl mx-auto px-4 flex items-center h-12 space-x-14 relative">
          {navItems.map((item, i) => (
            <div key={i} className="relative group">
              {/* Top-level link */}
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm md:text-base font-medium whitespace-nowrap hover:text-yellow-400 transition ${
                    isActive ? "border-b-2 border-yellow-400 pb-2" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>

              {/* Desktop dropdown */}
              {item.submenu && (
                <div className="absolute left-0 top-full bg-white text-blue-900 shadow-lg rounded-md w-48 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all z-50">
                  {item.submenu.map((sub, j) => (
                    <Link
                      key={j}
                      to={sub.path}
                      className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto transition-transform duration-300">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-blue-700"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 pb-10 space-y-6">
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4">
              <a
                href="/admissions"
                className="block bg-orange-400 text-white py-3 rounded-md text-center font-semibold hover:bg-orange-500 transition"
              >
                Online Admission
              </a>
              <a
                href="/fees"
                className="block bg-pink-600 text-white py-3 rounded-md text-center font-semibold hover:bg-pink-700 transition"
              >
                Online Fees Payment
              </a>
              <a
                href="/qr"
                className="block bg-green-500 text-white py-3 rounded-md text-center font-semibold hover:bg-green-600 transition"
              >
                QR Code
              </a>
            </div>

            {/* Mobile Nav */}
            <nav className="flex flex-col gap-2 pt-6 border-t border-gray-200">
              {navItems.map((item, i) => (
                <div key={i}>
                  {/* Without submenu */}
                  {!item.submenu && (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="text-blue-900 font-semibold py-2 text-lg hover:text-yellow-500 transition"
                    >
                      {item.name}
                    </NavLink>
                  )}

                  {/* With submenu */}
                  {item.submenu && (
                    <div>
                      <button
                        onClick={() =>
                          setOpenSub(openSub === item.name ? null : item.name)
                        }
                        className="w-full flex justify-between items-center text-blue-900 font-semibold py-2 text-lg"
                      >
                        {item.name}
                        <span>{openSub === item.name ? "▲" : "▼"}</span>
                      </button>

                      {openSub === item.name && (
                        <div className="ml-4 bg-gray-50 rounded-md py-2">
                          {item.submenu.map((sub, j) => (
                            <NavLink
                              key={j}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 pl-3 text-blue-700 hover:text-yellow-500"
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
