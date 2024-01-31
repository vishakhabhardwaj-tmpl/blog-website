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
import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import "../Navbar/navbar.css";

import { Link, useParams } from "react-router-dom";
import logoImage from "../../image/image.png";

function Navbar() {
  const pathname = useParams();
  console.log(pathname);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [suggestions, setSuggestions] = useState("");
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setSuggestions(e.target.value);
  };
  const getresult = async () => {
    const url =
      "https://onmyscreen-backend.onrender.com/blogs/search?q=" + suggestions;
    console.log(url, "link");
    const response = await fetch(url);
    const data = await response.json();
    setSearchData(data);
    console.log(data);
  };

  useEffect(() => {
    getresult();
  }, [suggestions]);

  console.log(suggestions, searchData);

  return (
    <>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="ONMYSCREEN" />{" "}
          </Link>
        </div>
        <div className="search">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            value={suggestions}
            onChange={handleChange}
          />
          <span className="search-icon material-symbols-outlined">
            <FaSearch />
          </span>
          {suggestions !== "" ? (
            <div className="suggestionborder" style={{ color: "white" }}>
              <div className="innerbox">
                {" "}
                <h4>Blog Posts</h4>
                {searchData?.map((e) => {
                  return (
                    <div className="suggestionresult">
                      <div className="suggestion-image">
                        {<img src={e.bannerImgLink} />}
                      </div>
                      <div className="suggestion-info">
                        <p className="suggestiontitle">{e.title}</p>
                        <p className="suggestiondesp">{e.shortDescription}</p>
                      </div>
                      {/* {e.title} */}
                      {/* <span>{e.id}</span> */}
                      {/* <span>{e.shortDescription}</span> */}
                      {/* <span>{<img src={e.bannerImgLink} />}</span> */}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
        <div className="nav-icons">
          {" "}
          {isMenuOpen ? (
            <button className="menu-icon" onClick={toggleMenu}>
              <FaTimes />
            </button>
          ) : (
            <button className="menu-icon" onClick={toggleMenu}>
              <FaBars />
            </button>
          )}
          <ul className="nav-links">
            <li>
              <Link to="/">MyBlog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobilesearch">
        <input
          className="mobile-search-input"
          type="search"
          placeholder="Search..."
        />
        <div className="mobile-search">
          <FaSearch />
        </div>
      </div>

      {isMenuOpen && (
        <div className="hamburgermenu">
          <ul>
            <li>
              <Link to="/" style={{ color: pathname === "" ? "red" : "white" }}>
                MyBlog
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                style={{ color: pathname === "About" ? "red" : "white" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                style={{ color: pathname === "Contact" ? "red" : "white" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
