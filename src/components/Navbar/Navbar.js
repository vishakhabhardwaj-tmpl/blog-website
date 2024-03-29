import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../Navbar/navbar.css";
import { NavLink } from "react-router-dom";

import {
  Link,
  //  useParams,
  useLocation,
} from "react-router-dom";
import logoImage from "../../image/image.png";

function Navbar() {
  // const pathname = useParams();
  const location = useLocation();
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
    const response = await fetch(url);
    const data = await response.json();
    setSearchData(data);
  };

  useEffect(() => {
    getresult();
  }, [suggestions]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // useEffect(() => {
  //   if (isMenuOpen) document.body.style.overflow = "hidden";
  //   else document.body.style.overflow = "unset";
  // }, [isMenuOpen]);

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
              <CiSearch />
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
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
        <div className={`nav-icons ${isMenuOpen ? "fixed-menu" : ""}`}>
          {" "}
          {isMenuOpen ? (
            <span className="menu-icon" onClick={toggleMenu}>
              <FaTimes />
            </span>
          ) : (
            <span className="menu-icon" onClick={toggleMenu}>
              <FaBars />
            </span>
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
              <a href="#contact-us">Contact</a>
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
            <CiSearch />
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
              <a href="#contact-us">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
