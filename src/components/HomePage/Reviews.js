import React from 'react'
import Card from '../Cards/Card'
import './Reviews.css'

const Reviews = () => {

    const data = [{
        id: 1,
        title:"My Top 5 Movies of All Times",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg/v1/fill/w_392,h_392,fp_0.50_0.50,q_90,enc_auto/e1bade_23184f3845c3430c9243f61c3ce45293~mv2.jpg",
        Date:"Mar 22,2023 . 1 min",
    },
    {
        id: 2,
        title:"New Movies to Stream from Home This Week",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg/v1/fill/w_392,h_514,fp_0.50_0.50,q_90,enc_auto/e1bade_9fe85efbfd56405ba1bf8a81e3495206~mv2.jpg",
        Date:"Mar 22,2023 . 2 min",
    },
    {
        id: 3,
        title:"5 Top True Crime Shows Ever",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg/v1/fill/w_391,h_391,fp_0.50_0.50,q_90,enc_auto/e1bade_c5de88e8444a4076be164755c9cedd13~mv2.jpg",
        Date:"Mar 22,2023 . 1 min",
    },
    {
        id: 4,
        title:"I Fell in Love With This Character",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        imageUrl: "https://static.wixstatic.com/media/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg/v1/fill/w_392,h_514,fp_0.50_0.50,q_90,enc_auto/e1bade_8b02166e45e14cb68b00dd75d93aa3b5~mv2.jpg",
        Date:"Mar 22,2023 . 1 min",
    },
    {
        id: 5,
        title:"This Historical Drama Knocks Down All the Rest",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.",
        imageUrl: "https://static.wixstatic.com/media/e1bade_b1f02a13482b4030b3ddd78cd6a7d448~mv2.jpg/v1/fill/w_392,h_392,fp_0.50_0.50,q_90,enc_auto/e1bade_b1f02a13482b4030b3ddd78cd6a7d448~mv2.jpg",
        Date:"Mar 22,2023 . 2 min",
    },
    {
        id: 6,
        title:"The Best Sci-Fi TV Show to Binge Watch Now",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_ef74ed321b774b59a762aa7b9edf4432~mv2.png/v1/fill/w_391,h_522,fp_0.50_0.50,q_95,enc_auto/e1bade_ef74ed321b774b59a762aa7b9edf4432~mv2.png",
        Date:"Mar 22,2023 . 2 min",
    },
    {

        id: 7,
        title:"This Thriller Is Not for Everyone",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_644a776e51594be4b648d85cee839fcc~mv2.jpg/v1/fill/w_392,h_392,fp_0.50_0.50,q_90,enc_auto/e1bade_644a776e51594be4b648d85cee839fcc~mv2.jpg",
        Date:"Mar 22,2023 . 1 min",
    },
    {
        id: 8,
        title:"Movies Critics Loved but Viewers Hated",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_bd985dfdc6be41cda8eaccb19619d2cb~mv2.jpg/v1/fill/w_392,h_514,fp_0.50_0.50,q_90,enc_auto/e1bade_bd985dfdc6be41cda8eaccb19619d2cb~mv2.jpg",
        Date:"Mar 22,2023 . 2 min",
    },
    {
        id: 9,
        title:"This Is the Best Doco You’ll See This Year",
        shortdescription:"Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....",
        imageUrl: "https://static.wixstatic.com/media/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg/v1/fill/w_391,h_391,fp_0.50_0.50,q_90,enc_auto/e1bade_ce97cc8b91254a1aa617ba9433b5e142~mv2.jpg",
        Date:"Mar 22,2023 . 1 min",
    },
    

]



  return (
    <div>
      <div className='start'>
      <div className='name'><h1>REVIEWS</h1></div>
        <div className='card-section'>
        {data.map((blogData) => {
                    return (
                        <Card key={blogData.id} shortdescription={blogData.shortdescription} imageurl={blogData.imageUrl} title={blogData.title} Date={blogData.Date} />
                    )
                })}
    </div>

    
  </div>
    </div>
  )
}

export default Reviews
