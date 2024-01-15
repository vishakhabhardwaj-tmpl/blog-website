import React from 'react'
import Reviews from '../components/HomePage/Reviews'
import SectionWithForm from '../components/HomePage/SectionWithForm'
import RatingSection from '../components/HomePage/RatingSection'
import MovieQuotesSection from '../components/HomePage/MovieQuotesSection'
import ForeverMoviesSection from '../components/HomePage/ForeverMoviesSection'


const Home = () => {
  return (
    <div>
        <>
    <Reviews />
    <SectionWithForm/>
    <RatingSection/>
    <MovieQuotesSection/>
    <ForeverMoviesSection/>
    
    </>
    </div>
  )
}

export default Home
