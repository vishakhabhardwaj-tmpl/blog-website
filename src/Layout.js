import React from 'react';
import Navbar from './Navbar';
import RightSidebar from './RightSidebar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <RightSidebar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
