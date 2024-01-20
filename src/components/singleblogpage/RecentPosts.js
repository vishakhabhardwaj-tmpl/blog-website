import React from 'react';
import { Link } from 'react-router-dom';
import RecentCard from '../RecentCard/RecentCard';
import './RecentPosts.css';
import Slider from 'react-slick';

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
    ,
    {
      id:3,
      imageUrl:'https://static.wixstatic.com/media/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg/v1/fill/w_391,h_391,fp_0.50_0.50,q_90,enc_auto/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg',
      heading:'5 Top True Crime Shows Ever',
    },
    {
      id:4,
      imageUrl:'https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_392,h_514,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg',
      heading:'I Fell in Love With This Character',
    },
    {
      id:5,
      imageUrl:'https://static.wixstatic.com/media/e1bade_b1f02a13482b4030b3ddd78cd6a7d448~mv2.jpg/v1/fill/w_392,h_392,fp_0.50_0.50,q_90,enc_auto/e1bade_b1f02a13482b4030b3ddd78cd6a7d448~mv2.jpg',
      heading:'This Historical Drama Knocks Down All the Rest',
    },
]
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2, 
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
}



  return (
    <div className='fullrecentpost'>
      <div className='FirstLane'>
          <p> Recent Posts </p> 
          <div className='see-all' ><Link to="/"><button>See All</button></Link></div>
        </div>
        <Slider {...settings} className='recentcard-section'>
        {posts.map((recentPosts) => {
                    return (
                        
                        <RecentCard key={recentPosts.id} heading={recentPosts.heading} imageurl={recentPosts.imageUrl}  />
                       
                    )
                })}

  
                </Slider>
    </div>
  )
 }

export default RecentPosts
