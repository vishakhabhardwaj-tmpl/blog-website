/*import{ useRef, useState } from "react";
import '../Navbar/navbar.css'





function Navbar(){
    return (
    <nav className="nav">
      <div className="logo">
      <h2>ONMYSCREEN</h2>  
      </div>
      <div className="search">
        <input class="search-input" type="search" placeholder="search..."/>
        <span class="search-icon material-symbols-outlined">
              search
        </span>
         </div>
            <div className="nav-icons">
            <ul> 
            <li><a href="/">MyBlog</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            </ul>
            </div>
  
      </nav>
    
  
    );
}
export default Navbar; */
import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import "../Navbar/navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
      <div className="logo">
        <h2>ONMYSCREEN</h2>
      </div>
      <div className="search">
        <input className="search-input" type="search" placeholder="Search..." />
        <span className="search-icon material-symbols-outlined">
          <FaSearch />
        </span>
      </div>
      <div className="nav-icons">
        <button className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="/">MyBlog</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


