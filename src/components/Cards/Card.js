import React from 'react'
import './Card.css'


const Card = ({title,imageurl,shortdescription, Date}) => {
  return (
    <div className='card-container'>
       <div className='image-container'>
        <img src={imageurl} alt=''/>

       </div>
       <div className='card-content'>
        <div className='date'>{Date}</div>
       <div className='card-title'>
        {title}

       </div>
       <div className='card-body'>
        <p>{shortdescription}</p>

       </div>
       </div>

      
    </div>
  )
}

export default Card
