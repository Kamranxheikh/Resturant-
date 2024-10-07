import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Starter from '../components/Starter';
import Dessert from '../components/Dessert';
import MainCourse from '../components/MainCourse';
import Drinks from '../components/Drinks';
import Navbar from '../components/Navbar';
import home3 from '../assets/images/home3.png';
import SideNav from '../components/SideNav';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';


const Menu = () => {
  return (
    <>
      <Navbar />
      <SideNav />

      <div className='relative'>
        <img
          src={home3}
          alt="Home Background"
          className="brightness-50  hover:scale-105 w-full h-[50vh] sm:h-[75vh] md:h-[75vh]
           md:transition duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105 "
        />
        <div className='absolute top-40 sm:top-48 md:top-1/5 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-normal mb-10 justify-center ml-7 items-center tracking-wider font-customSerif'>Menu</h1>
        </div>
      </div>

      <div className='flex mt-20 justify-center items-center sm:text-3xl md:text-4xl text-gray-500 text-lg font-customSerif space-x-1 sm:space-x-8 md:space-x-16'>
        <Link to="starter">
          <h1 className='hover:underline hover:text-black'>STARTER</h1>
        </Link>
        <Link to="maincourse">
          <h1 className='hover:underline hover:text-black'>MAIN COURSE</h1>
        </Link>
        <Link to="dessert">
          <h1 className='hover:underline hover:text-black'>DESSERT</h1>
        </Link>
        <Link to="drinks">
          <h1 className='hover:underline hover:text-black'>DRINKS</h1>
        </Link>
      </div>

        <Routes>

        <Route path="starter" element={<Starter />} />
        <Route path="maincourse" element={<MainCourse />} />
        <Route path="dessert" element={<Dessert />} />
        <Route path="drinks" element={<Drinks />} />
        {/* Add a default route if needed */}
        </Routes>
        <StatsSection/>
        <Footer/>

        
       
        </>
  );
}

export default Menu;
