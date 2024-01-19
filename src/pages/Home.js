import React from 'react'
import Reviews from '../components/HomePage/Reviews'
import SectionWithForm from '../components/HomePage/SectionWithForm'
import RatingSection from '../components/HomePage/RatingSection'
import MovieQuotesSection from '../components/HomePage/MovieQuotesSection'
import ForeverMoviesSection from '../components/HomePage/ForeverMoviesSection'
import './Home.css';


const Home = () => {
  return (
    <>
    <Reviews />
    <SectionWithForm/>

    <div className='home'>
    <RatingSection/>
    <MovieQuotesSection/>
    <ForeverMoviesSection/>
    </div>
    </>
  )
}

export default Home
