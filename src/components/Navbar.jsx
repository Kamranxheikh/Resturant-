import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className=' bg-slate-950 text-white sm:px-20 fixed top-0 w-full z-index  z-50'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex  ml-8  space-x-2 '>
            <h1 className='text-sm font-bold flex justify-start cursor-pointer '>English </h1>
            <span className=' mt-1'><IoIosArrowDown /></span>

          </div>
          <div><h1 className='text-3xl  flex leading-loose tracking-widest cursor-pointer '>LOGO</h1></div>
          <div className='flex space-x-5 cursor-pointer mr-4' >
           <a href="https://www.instagram.com/"><FaInstagram /></a> 
            <a href="https://www.facebook.com/"><MdFacebook/></a>
            <a href="https://help.x.com/en/using-x/create-x-account"><FaTwitter /></a>
          </div>
        </div>


      </nav>
    </div>
  )
}

export default Navbar