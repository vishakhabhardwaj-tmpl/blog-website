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
import { NavLink } from "react-router-dom";

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
          {suggestions === "" ? (
            <span className="search-icon material-symbols-outlined">
              <FaSearch />
            </span>
          ) : null}
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
              <NavLink to="/" activeClassName="active">
                MyBlog
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobilesearch">
        <input
          className="mobile-search-input"
          type="search"
          placeholder="Search..."
          value={suggestions}
          onChange={handleChange}
        />
        {suggestions === "" ? (
          <div className="mobile-search">
            <FaSearch />
          </div>
        ) : null}
        {suggestions !== "" ? (
          <div className="suggestionbordermobile" style={{ color: "white" }}>
            <div className="innerboxmobile">
              {" "}
              <h4>Blog Posts</h4>
              {searchData?.map((e) => {
                return (
                  <div className="suggestionresultmobile">
                    <div className="suggestion-image-mobile">
                      {<img src={e.bannerImgLink} />}
                    </div>
                    <div className="suggestion-info-mobile">
                      <p className="suggestiontitlemobile">{e.title}</p>
                      <p className="suggestiondespmobile">
                        {e.shortDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      {isMenuOpen && (
        <div className="hamburgermenu">
          <ul className="mobile-nav-links">
            <li>
              <NavLink to="/" activeClassName="active">
                MyBlog
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
