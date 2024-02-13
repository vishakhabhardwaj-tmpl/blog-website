import React from "react";
import Navbar from "../Navbar/Navbar";
import RightSidebar from "../StickySideBar/RightSidebar";
import Footer from "../Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ overflowX: "hidden" }}>
        <RightSidebar />
        {children}
      </div>

      <Footer />
    </>
  );
};

export default Layout;
