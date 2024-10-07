import React from 'react';
import { Link } from 'react-router-dom';
import home1 from '../assets/images/home1.jpg';
import restu from '../assets/images/restu.png';
import restu2 from '../assets/images/restu2.png';
import home3 from '../assets/images/home3.png';
import home4 from '../assets/images/home4.png';
import Meet from '../components/Meet';
import OurServices from '../components/OurServices';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import FoodCategory from '../components/FoodCategory';
import { FaHome, FaInfoCircle, FaCheck } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoFastFood, IoCall } from "react-icons/io5";

const Home = () => {
    return (
        <>
        <Navbar/>
             <div className="pt-16"> 
                <div className="sm:grid grid-cols-2 w-full h-auto justify-center items-center text-white">
                    <div className="w-full h-auto">
                        <img 
                            src={home1} 
                            alt="Home Background" 
                            className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 blur-sm md:blur-md lg:blur-md w-full h-[100vh]" 
                        />
                    </div>
                    <div className="w-full h-auto">
                        <img 
                            src={home1} 
                            alt="Home Accent" 
                            className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full h-[100vh] rounded-lg border-b-11" 
                        />
                    </div>
                    <div className="absolute py-6 z-40 lg:left-32 top-40 sm:top-36 md:top-36 bg-opacity-24 lg:top-60 bottom-0 text-white bg-opacity-200 rounded-lg">
                        <p className='text-3xl mb-6 font-great-vibes'>It's Quick & Amusing!</p>
                        <p className='w-full text-4xl mb-6 font-fede-ro'>Lorem ipsum dolor <br /> sit amet consectetur.</p>
                        <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                        <button className='bg-teal-500 px-6 py-3 text-lg rounded-lg'>See Menu</button>
                    </div>
                </div>
            </div>

            <nav className='fixed  right-5 h-auto flex flex-col items-center justify-center space-y-6 bg-black bg-opacity-50 p-4  rounded-l-lg sm:fixed md:fixed top-40 rounded-xl w-fit z-50'>
                <Link to="/" className='flex flex-col items-center text-white'>
                <FaHome size={24} />
                    <span>Home</span>
                </Link>
                <Link to="/Menu" className='flex flex-col items-center text-white'>
                    <RiRestaurant2Fill size={24} />
                    <span>Menu</span>
                </Link>
                <Link to="/Franchise" className='flex flex-col items-center text-white'>
                    <IoFastFood size={24} />
                    <span>Franchise</span>
                </Link>
                <Link to="/About" className='flex flex-col items-center text-white'>
                    <FaInfoCircle size={24} />
                    <span>About</span>
                </Link>
                <Link to="/Contact" className='flex flex-col items-center text-white'>
                    <IoCall size={24} />
                    <span>Contact Us</span>
                </Link>
                
            </nav>

            <div className='sm:grid grid-cols-2 w-full  '>
                <div className='flex flex-col  justify-center sm:items-start  lg:items-start   mt-10 p-5  '>
                    <h1 className='text-5xl mb-10 justify-center ml-7 items-center  font-customSerif'>About Us</h1>
                    <h1 className='text-3xl  font-custom ml-7 font-customSerif'>We Create the Best Foody Products</h1>
                    <div className=' p-6 justify-center items-center   '>
                        <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    </div>
                </div>

                <div className='flex flex-wrap   justify-center  items-center '>
                    <img src={home3} alt="About Us" className='h-full w-[85%] justify-center items-center rounded-lg hover:shadow-2xl transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105' style={{ height: '320px' }} />
                </div>
            </div>
            <div className='flex flex-wrap w-full h-full mb-6 justify-center mt-8 sm:mt-0 items-center sm:grid grid-cols-2'>
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
                <div className='w-full flex justify-center space-x-6'>
                    <img src={home4} alt="Home 4" style={{ width: '40%', height: '220px' }} className='hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105rounded-lg' />
                    <img src={home3} alt="Home 3" style={{ width: '40%', height: '220px' }} className='hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 rounded-lg' />
                </div>
            </div>

            <FoodCategory/>

            <div className="relative bg-cover bg-center  hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105   h-96 mt-20 bg-[url('./src/assets/images/be.png')]">
                <div className="absolute  inset-0  space-y-8 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
                    <h1 className="text-white text-6xl mb-2">Book Early & Save</h1>
                    <p className="text-white text-2xl mb-5">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="bg-teal-500 text-white font-semibold py-2 px-6  rounded hover:bg-teal-600">
                        Book Now
                    </button>
                </div>
            </div>
            <Meet />
            <div className=' sm:grid grid-cols-2 px-8   sm:width-[50%] '>
                <img src={restu} alt="Home Background" className=" sm:h-full  mb-10 hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full " />
                <div className='border-t-4 border-r-4   border-emerald-300'>
                    <h1 className='text-3xl text-right mr-4 mb-10 pt-11 justify-right items-right  font-customSerif'>Our Restaurants</h1>
                    <p className='text-right text-lg mr-4 sm:pl-8 '> Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec
                        nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
                        facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
                        mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius
                        hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
                        maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
                        accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas
                        duis
                    </p>
                </div>

            </div>
            <div className=' sm:grid grid-cols-2 px-8  sm:width-[50%]'>
                <div className='border-b-4 border-l-4 space-y-5   border-emerald-300'>
                    <h1 className='text-3xl pt-11 mb-10  ml-4  tracking-wide  font-customSerif'>Meet & greet</h1>
                    <p className=' text-lg ml-4  sm:pr-8 '> Eleifend facilisis sed facilisis varius hendrerit accumsan tortor. Donec
                        nisi est mattis mauris morbi orci maecenas duis. Eleifend facilisis sed
                        facilisis varius hendrerit accumsan tortor. Donec nisi est mattis
                        mauris morbi orci maecenas duis. Eleifend facilisis sed facilisis varius
                        hendrerit accumsan tortor. Donec nisi est mattis mauris morbi orci
                        maecenas duis. Eleifend facilisis sed facilisis varius hendrerit
                        accumsan tortor. Donec nisi est mattis mauris morbi orci maecenas
                        duis
                    </p>
                </div>
                <img src={restu2} alt="Home Background" className=" sm:h-full mt-10 sm:mt-0 md:mt-0   hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full " />

            </div>
            <OurServices />
            <Footer />


        </>
    );
}

export default Home;

























// import React from 'react';
// import { Link } from 'react-router-dom';
// import home1 from '../assets/images/home1.jpg';
// import Meet from '../components/Meet';
// import OurServices from '../components/OurServices';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// import { FaHome, FaInfoCircle, FaCheck } from "react-icons/fa";
// import { RiRestaurant2Fill } from "react-icons/ri";
// import { IoFastFood, IoCall } from "react-icons/io5";

// const Home = () => {
//     return (
//         <>
//             <Navbar />
//             <div className="pt-16"> 
//                 <div className="sm:grid grid-cols-2 w-full h-auto justify-center items-center text-white">
//                     <div className="w-full h-auto">
//                         <img 
//                             src={home1} 
//                             alt="Home Background" 
//                             className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 blur-sm md:blur-md lg:blur-md w-full h-[100vh]" 
//                         />
//                     </div>
//                     <div className="w-full h-auto">
//                         <img 
//                             src={home1} 
//                             alt="Home Accent" 
//                             className="hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full h-[100vh] rounded-lg border-b-11" 
//                         />
//                     </div>
//                     <div className="absolute py-6 z-40 lg:left-32 top-40 sm:top-36 md:top-36 bg-opacity-24 lg:top-60 bottom-0 text-white bg-opacity-200 rounded-lg">
//                         <p className='text-3xl mb-6 font-great-vibes'>It's Quick & Amusing!</p>
//                         <p className='w-full text-4xl mb-6 font-fede-ro'>Lorem ipsum dolor <br /> sit amet consectetur.</p>
//                         <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
//                         <button className='bg-teal-500 px-6 py-3 text-lg rounded-lg'>See Menu</button>
//                     </div>
//                 </div>
//             </div>

//             <nav className='fixed right-5 h-auto flex flex-col items-center justify-center space-y-6 bg-black bg-opacity-50 p-4 rounded-l-lg sm:fixed md:fixed top-40 rounded-xl w-fit z-50'>
//                 <Link to="/" className='flex flex-col items-center text-white'>
//                     <FaHome size={24} />
//                     <span>Home</span>
//                 </Link>
//                 <Link to="/Menu" className='flex flex-col items-center text-white'>
//                     <RiRestaurant2Fill size={24} />
//                     <span>Menu</span>
//                 </Link>
//                 <Link to="/Franchise" className='flex flex-col items-center text-white'>
//                     <IoFastFood size={24} />
//                     <span>Franchise</span>
//                 </Link>
//                 <Link to="/About" className='flex flex-col items-center text-white'>
//                     <FaInfoCircle size={24} />
//                     <span>About</span>
//                 </Link>
//                 <Link to="/Contact" className='flex flex-col items-center text-white'>
//                     <IoCall size={24} />
//                     <span>Contact Us</span>
//                 </Link>
//             </nav>
//             <Meet />
//             <OurServices />
//             <Footer />
//         </>
//     );
// }

// export default Home;

