import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import re1 from '../assets/images/re1.jpg';
import re2 from '../assets/images/re2.jpg';
import re3 from '../assets/images/re3.jpg';
import re4 from '../assets/images/re4.jpg';
import re5 from '../assets/images/re5.jpg';

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-[90%] w-8 slate-800 right-5  transform -translate-y-1/2`}
        style={{ ...style, display: 'block', color: 'white' }}
        onClick={onClick}
      >
        &#10095; 

      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute top-1/2 w-10 h-8 left-5 transform -translate-y-1/2`}
        style={{ ...style, display: 'block', color: 'white' }}
        onClick={onClick}
      >
        &#10094; 
      </div>
    );
  };
  
const ImageSlider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    nextArrow: <NextArrow/>, 
    prevArrow: <PrevArrow />, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    { id: 1, src: re1, alt: 'Image 1' },
    { id: 2, src: re2, alt: 'Image 2' },
    { id: 3, src: re2, alt: 'Image 3' },
    { id: 4, src:  re4 , alt: 'Image 4' },
    { id: 5, src: re5, alt: 'Image 5' },
  ];

  return (
    <div className="slider-container m-16">
      <Slider {...settings}  >
        {images.map(image => (
          <div key={image.id} >
            <img src={image.src} alt={image.alt} className="w-full h-[500px] border-2 border-gray-500 rounded-md shadow-md border-spacing-2 " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider2;







