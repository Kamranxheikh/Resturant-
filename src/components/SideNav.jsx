import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoFastFood, IoCall } from "react-icons/io5";

const SideNav = () => {
  return (
    <nav className='fixed  md:right-8 right-0 h-auto  flex flex-col items-center justify-center space-y-2 md:space-y-6
     bg-black bg-opacity-50 p-4  rounded-l-lg sm:fixed md:fixed md:top-40 top-28 rounded-xl w-fit z-50'>
    <Link to="/" className='flex flex-col items-center text-white'>
    <FaHome md:size={24} size={18} />
        <span>Home</span>
    </Link>
    <Link to="/Menu" className='flex flex-col items-center text-white'>
        <RiRestaurant2Fill md:size={24} size={18} />
        <span>Menu</span>
    </Link>
    <Link to="/Franchise" className='flex flex-col items-center text-white'>
        <IoFastFood md:size={24} size={18} />
        <span>Franchise</span>
    </Link>
    <Link to="/About" className='flex flex-col items-center text-white'>
        <FaInfoCircle md:size={24} size={18} />
        <span>About</span>
    </Link>
    <Link to="/Contact" className='flex flex-col items-center text-white'>
        <IoCall md:size={24} size={18} />
        <span>Contact Us</span>
    </Link>
</nav>

  )
}

export default SideNav