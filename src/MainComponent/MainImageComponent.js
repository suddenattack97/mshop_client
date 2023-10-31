import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MainImageComponent.css';

function MainImageComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const images = [
    "heros.png",
    "rader.png",
  ];

  return (
    <div className="mainImageComponent">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`슬라이드 ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainImageComponent;