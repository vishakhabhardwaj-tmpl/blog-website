import {FaBars, FaTimes} from "react-icons/fa";
import{ useRef } from "react";
import '../Navbar/navbar.css'
function Navbar(){
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
    return (
    <nav nav className='nav'>
      <a href="/" className= "site-title">ONMYSCREEN</a>    <div div class="search">
        <span class="search-icon material-symbols-outlined">
              search
        </span>
        <input class="search-input" type="search" placeholder="search..."/>
         </div>
      <div ref ={navRef}>

    
    
          <div><ul> <li><a href="/">MyBlog</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Contact">Contact</a></li>
            </ul>
      
      <button className="nav-btn nav-close-btn" onClick={showNavbar}>
        <FaTimes/>
      </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
       
       
    
      </div>
      </nav>
    );
}
export default Navbar;
