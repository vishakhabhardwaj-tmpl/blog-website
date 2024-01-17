import React from 'react'
import { Link } from 'react-router-dom';
import './RecentCard.css';

const RecentCard = ({id,imageurl,heading}) => {
  return (
    <div className='RecentCardFirst'>
       <Link to="/blog/1">
       <div className='recentImage'>
        <img src={imageurl} alt=''/>

       </div>
       <div className='recentHeading'>
        <p>{heading}</p>

       </div>

       </Link>
    </div>
  )
}

export default RecentCard
