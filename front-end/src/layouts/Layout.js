import React, { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelector('.bg-white').classList.add('animate-linearLoad');
  }, []);

  return (
    <div className="bg-white transition-all">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
