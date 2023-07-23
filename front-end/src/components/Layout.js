import React, { useEffect } from 'react';
import Navbar from '../layouts/Navbar';

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelector('.bg-white').classList.add('animate-linearLoad');
  }, []);

  return (
    <div className="min-h-screen bg-white transition-all">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
