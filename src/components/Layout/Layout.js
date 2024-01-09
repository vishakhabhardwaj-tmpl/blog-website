import React from 'react';
import Navbar from '../Navbar/Navbar';
import RightSidebar from '../StickySideBar/RightSidebar';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <RightSidebar />
      {children}
      <Footer/>
    </>
  );
}

export default Layout;
