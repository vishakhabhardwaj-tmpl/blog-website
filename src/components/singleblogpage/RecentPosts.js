import React from 'react';
import { Link } from 'react-router-dom';
import RecentCard from '../RecentCard/RecentCard';
import './RecentPosts.css';

const RecentPosts = () => {
    const posts= [
    {    id:1,
         imageUrl: 'https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_232,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg',
         heading : 'My Top 5 Movies of All Times',
    }
    ,
    {   id:2,
        imageUrl: 'https://static.wixstatic.com/media/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg/v1/fill/w_232,h_131,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg',
        heading: '5 Top True Crime Shows Ever',
    }
]
  return (
    <div className='fullrecentpost'>
      <div className='FirstLane'>
          <p> Recent Posts </p> 
          <div className='see-all' ><Link to="/"><button>See All</button></Link></div>
        </div>
        <div className='recentcard-section'>
        {posts.map((recentPosts) => {
                    return (
                        
                        <RecentCard key={recentPosts.id} heading={recentPosts.heading} imageurl={recentPosts.imageUrl}  />
                       
                    )
                })}
            </div>
    </div>
  )
}

export default RecentPosts
