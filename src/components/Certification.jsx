
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/Certification.css'; 

const Certification = (id) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div id='certification' className="carousel-container" data-aos="fade-up"> 
      <div>
      <h1 className='heading1' data-aos="fade-up" >CERTIFICATION</h1>
        </div>
        
      <Slider {...settings}>
        <div>
          <img src="/certification/CSS.png" alt="CSS Certificate" />
        </div>
        <div>
          <img src="/certification/react.png" alt="React Certification" />
        </div>
        <div>
          <img src="/certification/ReactNative.png" alt="React Native" />
        </div>
        <div>
          <img src="/certification/MERNStack.png" alt="MERN Stack Training" />
        </div>
        <div>
          <img src="/certification/WordPress.png" alt="Wordpress Course" />
        </div>
      </Slider>
    </div>
  );
};

export default Certification;
