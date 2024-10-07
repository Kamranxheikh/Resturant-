import React from 'react'
import Navbar from '../components/Navbar';
import OurServices from '../components/OurServices';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import dish1 from '../assets/images/dish1.png';


const Contact = () => {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className='relative'>
        <img
          src={dish1}
          alt="Background Image"
          className="brightness-50  w-full h-[50vh] sm:h-[75vh] md:h-[75vh]
           md:transition duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105 "
        />
        <div className='absolute top-40 sm:top-48 md:top-1/5 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-7xl font-normal mb-10 tracking-wider font-customSerif'>Check Out</h1>
        </div>
      </div>
      <ContactForm />
     <OurServices />
     <Footer />




    </>
  )
}

export default Contact