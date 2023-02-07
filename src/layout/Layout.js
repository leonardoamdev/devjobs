import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="h-full pt-[161px]">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
