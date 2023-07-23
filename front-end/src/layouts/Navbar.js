import React from 'react';
import logo from "../images/mss.png";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
      <nav className={`fixed top-0 left-0 right-0 ${scrolling ? 'shadow-md transition-shadow duration-800' : ''} py-4 px-4 md:px-12 lg:px-16 flex items-center justify-between`}>
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="mss logo" className="w-20 mr-2" />
          </a>
        </div>
        <div className={`hidden md:flex space-x-4 ml-auto ${showMenu ? 'block' : 'hidden'}`}>
          <a href="#" className="hover:text-blue-800">Home</a>
          <a href="#" className="hover:text-blue-800">Courses</a>
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button
              className={`flex items-center text-blue-800 hover:text-indigo-500 focus:outline-none`}
              onClick={toggleDropdown}
            >
              Categories
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-500 ${showDropdown ? 'rotate-90' : 'rotate-0'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {showDropdown && (
              <div
                className={`absolute bg-white w-40 mt-1 py-2 px-4 shadow-md rounded left-0 transition-opacity duration-400 ${showDropdown ? 'opacity-100' : 'opacity-0'
                  }`}
                onMouseLeave={() => setShowDropdown(false)}
                onMouseEnter={() => setShowDropdown(true)}
              >
                {/* Add your dropdown items here */}
                <a href="#" className="block mb-2 hover:text-blue-800">
                  Dropdown Item 1
                </a>
                <a href="#" className="block mb-2 hover:text-blue-800">
                  Dropdown Item 2
                </a>
                <a href="#" className="block mb-2 hover:text-blue-800">
                  Dropdown Item 3
                </a>
                <a href="#" className="block mb-2 hover:text-blue-800">
                  Dropdown Item 4
                </a>
                <a href="#" className="block mb-2 hover:text-blue-800">
                  Dropdown Item 5
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-blue-800">About us</a>
          <a href="#" className="hover:text-blue-800">Contact</a>
        </div>
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6 ml-4 lg:ml-14">
          <button className={`transition-colors duration-300 ease-out-in bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 py-2 px-3 rounded`}>
            Log In
          </button>
          <button className={`transition-colors duration-300 ease-out-in bg-blue-500 hover:bg-white hover:text-blue-500  text-white border border-blue-500 py-2 px-3 rounded`}>
            Sign Up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className='p-2'>
            {showMenu ? (
              <svg className='w-6 h-6 fill-current text-blue-800' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.293 5.293l-11 11c-.39.39-1.024.39-1.414 0l-11-11c-.391-.391-.391-1.024 0-1.414s1.024-.391 1.414 0l10.293 10.293 10.293-10.293c.39-.391 1.024-.391 1.414 0s.391 1.023 0 1.414z" /></svg>
            ) : (
              <svg className="w-6 h-6 fill-current text-blue-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 6c0-.552.447-1 1-1s1 .448 1 1v12c0 .552-.447 1-1 1s-1-.448-1-1zm4 3c0-.552.447-1 1-1s1 .448 1 1v6c0 .552-.447 1-1 1s-1-.448-1-1v-6zm4-3c0-.552.447-1 1-1s1 .448 1 1v15c0 .552-.447 1-1 1s-1-.448-1-1v-15zm4 6c0-.552.447-1 1-1s1 .448 1 1v9c0 .552-.447 1-1 1s-1-.448-1-1v-9zm4-3c0-.552.447-1 1-1s1 .448 1 1v12c0 .552-.447 1-1 1s-1-.448-1-1z" /></svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


