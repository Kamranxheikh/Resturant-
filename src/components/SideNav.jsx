import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, } from "react-icons/fa";
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoFastFood, IoCall } from "react-icons/io5";

const SideNav = () => {
  return (
    <nav className='fixed  right-8 h-auto flex flex-col items-center justify-center space-y-6 bg-black bg-opacity-50 p-4  rounded-l-lg sm:fixed md:fixed top-40 rounded-xl w-fit z-50'>
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

  )
}

export default SideNav