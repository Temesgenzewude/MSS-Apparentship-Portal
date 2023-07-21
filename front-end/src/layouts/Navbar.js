import React from 'react';
import logo from "../images/mss.png";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white ${scrolling ? 'shadow-md' : ''} py-2 px-4 md:px-12 lg:px-16 flex items-center justify-between transition-shadow`}>
      <div className="flex items-center">
        <img src={logo} alt="mss logo" className="w-20 mr-2" />
      </div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="hover:text-indigo-500">Home</a>
        <a href="#" className="hover:text-indigo-500">Courses</a>
        <a href="#" className="hover:text-indigo-500">Categories</a>
        <a href="#" className="hover:text-indigo-500">About Us</a>
        <a href="#" className="hover:text-indigo-500">Contact</a>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <button className={`transition-colors duration-300 ease-out-in bg-white hover:bg-blue-500 hover:text-white text-blue-500 border border-blue-500 py-2 px-3 rounded`}>
          Log In
        </button>
        <button className={`transition-colors duration-300 ease-out-in bg-blue-500 hover:bg-white hover:text-blue-500  text-white border border-blue-500 py-2 px-3 rounded`}>
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
