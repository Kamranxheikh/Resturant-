import React from 'react'
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Footer from '../components/Footer';
import dish1 from '../assets/images/dish1.png';
import ProductPage from '../components/ProductPage';
import { FaCheck } from "react-icons/fa";
import OurServices from '../components/OurServices';

const About = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className='relative'>
        <img
          src={dish1}
          alt="Background Image"
          className="brightness-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full h-[65vh] sm:h-[75vh] md:h-[75vh]"
        />
        <div className='absolute top-40 sm:top-48 md:top-1/5 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-7xl font-normal mb-10 tracking-wider font-customSerif'>Product Details</h1>
        </div>
      </div>
      <ProductPage />
      <div className='flex flex-wrap p-5 space-y-7 px-12 mt-6'>
        <div className='w-40 justify-center items-center   md:w-52 h-12 space-x-5 shadow-2xl'>
          <h1 className='text-2xl font-customSerif sm:text-3xl md:text-4xl  '>
            Description
          </h1>
        </div>

        <p>
          Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at
          justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus
          vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl
        </p>
        <p>
          Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum
          accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo.
          Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet se
        </p>
        <div className='w-40 justify-center items-center   md:w-52 h-12 space-x-5 shadow-2xl'>
          <h1 className='text-2xl font-customSerif sm:text-3xl md:text-4xl'>
            Key Benefits
          </h1>
        </div>
      </div>
      <div className="flex flex-col space-y-7 ml-11   "  >
        <div className="flex items-center  ">
          <FaCheck className="mr-2" />
          <span>Lacus nisi, et ac dapibus sit eu velit in consequat.</span>
        </div>
        <div className="flex items-center">
          <FaCheck className="mr-2" />
          <span>Quisque diam pellentesque bibendum non dui volutpat fringilla.</span>
        </div>
        <div className="flex items-center ">
          <FaCheck className="mr-2 " />
          <span>Urna, elit augue urna, vitae feugiat pretium donec id elementum.</span>
        </div>
        <div className='mt-20'>
          <button className='bg-teal-500 px-6    hover:bg-teal-600 text-white justify-center items-center   py-3 w-40 mb-8 text-lg rounded-lg'>Read more</button>
        </div>
      </div>
      <OurServices />
      <Footer />
    </>
  )
}

export default About