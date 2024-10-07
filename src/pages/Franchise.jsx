import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Pouros from '../components/Pouros';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider'; 
import ImageSlider2 from '../components/ImageSlider2'; 
import be from '../assets/images/be.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Franchise = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className='relative'>
        <img
          src={be}
          alt="Background Image"
          className="brightness-50  w-full h-[50vh] sm:h-[75vh] md:h-[75vh]
           md:transition duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105 "
        />
        <div className='absolute top-40 sm:top-48 md:top-1/5 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-7xl font-normal mb-10 tracking-wider font-customSerif'>Our Branches</h1>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-20'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl mb-10 tracking-wide font-customSerif'>Introducing New Look</h1>
      </div>
      <ImageSlider />
      <Pouros/>
      <div className='flex flex-col items-center justify-center mt-20'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl mb-10 tracking-wide font-customSerif'>We Are In Brisbol</h1>
      </div>
      <ImageSlider2 />
      <Pouros/>
      <Footer />
    </>
  );
};

export default Franchise;



























