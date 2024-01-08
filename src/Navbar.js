import About from "./pages/About";

export default function Navbar(){
    return <nav className='nav'>
      <a href="/" className= "site-title">ONMYSCREEN</a>
    
        <div class="search">
        <span class="search-icon material-symbols-outlined">
              search
        </span>
        <input class="search-input" type="search" placeholder="search..."/>

        </div>

     <ul>
        <li>
          <a href="/MyBlog">MyBlog</a>
         
        
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>
}
