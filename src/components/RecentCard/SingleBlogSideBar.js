import React from 'react'
import { Link } from 'react-router-dom'
import './SingleBlogSideBar.css'


const SingleBlogSideBar = () => {
  return (
    < div className='singlesidebar'>
         < div className="about-me">
        <h2>About Me</h2>
        <hr />
        <div className='imageauthor'>
        <img
          src="https://static.wixstatic.com/media/e1bade_c9f7464c4b3f47328e7c4f26dbe60e77~mv2.jpg/v1/crop/x_496,y_1696,w_2550,h_3254/fill/w_356,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/About.jpg" // Replace with your image URL
          alt="Profile"
        />
        </div>
        <p>
          Short description about yourself goes here. You can provide some information
          about your interests, skills, or anything you'd like others to know.
        </p>
        <Link to= '/about'><button>Read More</button></Link>
        <hr/>
        </div>
        <div className='postarchieve'>
            <h2>PostsArchive</h2>
            <hr/>
            <div className='postbutton'>
                <Link to='/blog/:blogId'><button>March(2023) 9</button></Link>
                <hr/>
            </div>

        </div>
        <div className='tags'>
            <h2>Tags</h2>
            <hr/>
            <div className='tagbuttons'>
                <Link to ='/'><button>Movie</button></Link>
                <Link to ='/'><button>Review</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SingleBlogSideBar
