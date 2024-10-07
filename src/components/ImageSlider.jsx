

   


import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import i7 from '../assets/images/i7.jpg';
import i6 from '../assets/images/i6.webp';
import i8 from '../assets/images/i8.jpg';
import i9 from '../assets/images/i9.jfif';
import istock from '../assets/images/istock.jpg';

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
  
const ImageSlider = () => {
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
    { id: 1, src: i7, alt: 'Image 1' },
    { id: 2, src: i6, alt: 'Image 2' },
    { id: 3, src: i8, alt: 'Image 3' },
    { id: 4, src:  i9 , alt: 'Image 4' },
    { id: 5, src: istock, alt: 'Image 5' },
  ];

  return (
    <div className="slider-container m-16">
      <Slider {...settings}  >
        {images.map(image => (
          <div key={image.id} >
            <img src={image.src} alt={image.alt} className="w-full h-[350px] md:h-[500px] border-2 border-gray-500 rounded-md shadow-md border-spacing-2 " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;





