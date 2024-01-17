import React from 'react'
import Blog from '../components/singleblogpage/Blog'
import RecentPosts from '../components/singleblogpage/RecentPosts'
import SingleBlogSideBar from '../components/RecentCard/SingleBlogSideBar'
import './SingleBlogPage.css';

const SingleBlogPage = () => {
  return (

      <div className='blogpagemain' >
        <div className='fullblog'>
      
        <Blog />
        <RecentPosts />
        </div>
        <div className='blogsidebar'>
          <SingleBlogSideBar/>
        </div>
      
    </div>

  )
}

export default SingleBlogPage
