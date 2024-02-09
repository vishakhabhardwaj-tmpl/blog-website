import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieQuotesSection.css";
import { CustomPrevArrow, CustomNextArrow } from "../CustomArrows";

// const CustomPrevArrow = ({ onClick }) => (
//   <div className="custom-arrow custom-prev" onClick={onClick}>
//     &#8249;
//   </div>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <div className="custom-arrow custom-next" onClick={onClick}>
//     &#8250;
//   </div>
// );

const MovieQuotesSection = () => {
  const quotes = [
    { text: '"Why cant you tell me  what you want?"', movie: "Bermuda Times" },
    {
      text: '"Look me in the eyes and count till ten "',
      movie: "Being Unfaithful",
    },
    { text: '"You know it when you see it"', movie: "The Funny Lady" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="movie-quotes-section">
      <h2>The Best Movie Quote Ever</h2>
      <hr />
      <div className="maiin">
        <Slider {...settings}>
          {quotes.map((quote, index) => (
            <div key={index} className="quote-container">
              <p className="quote-text">{quote.text}</p>
              <p className="movie-name">{quote.movie}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieQuotesSection;
