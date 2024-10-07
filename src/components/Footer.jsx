import React from 'react';
import { Link } from 'react-router-dom';
// import f2 from '../assets/images/f2.png';
// import f3 from '../assets/images/f3.png';
// import f4 from '../assets/images/f4.png';
// import f5 from '../assets/images/f5.png';
import dr2 from '../assets/images/dr2.jpeg';
import dr3 from '../assets/images/dr3.jpeg';
import main1 from '../assets/images/main1.jpeg';
import main2 from '../assets/images/main2.jpeg';
import main3 from '../assets/images/main3.jpeg';
import dr4 from '../assets/images/dr4.jpeg';




function Footer() {
  return (
    <>
    <footer className="bg-gray-300 py-8 ">
      <div className="max-w-9xl mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 sm:ml-48  sm:mr-48 space-x-10">
        <div className="text-center md:text-left text-gray-700">
          <h2 className="font-bold text-lg">LOGO</h2>
          <p className="my-4">Lorem ipsum dolor sit amet</p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 border border-gray-400  rounded-l-md w-72 md:w-auto"
            />
            <button className="p-2 bg-teal-500 text-white rounded-r-md">
              &#10148;
            </button>
          </div>
        </div>
        
        <div className="text-center md:text-left text-gray-700 ">
          <h2 className="font-bold text-lg">Contact us</h2>
          <p className="my-2">📍 25950 Long Lane, North Ismael 14280</p>
          <p className="my-2">📞00965 - 96659986</p>
          <p className="my-2">📧 Jermaine.Connelly@yahoo.com</p>
          <p className="my-2">🕒 Sun - Sat / 10:00 AM - 8:00 PM</p>
        </div>

        {/* Links */}
        <div className="text-center sm:text-left text-gray-700 flex flex-col">
          <h2 className="font-bold text-lg">Links</h2>
          <Link to={"/About"} className="my-2">About us</Link>
          <Link to={"/Contact"} className="my-2">Contact Us</Link>
          <Link to={"/Menu"} className="my-2">Our Menu</Link>
          <Link to={"/"} className="my-2">Team</Link>
          <Link to={"/"} className="my-2">FAQ</Link>
        </div>

        <div className="text-center justify-center  items-center ">
          <h2 className="font-bold text-lg mb-10 text-gray-700 ">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 w-72 h-auto  sm:justify-center items-center md:justify-start ">
        <img src={dr4} alt="Gallery item"className='w-40 h-auto lg:- h-auto' />
            <img src={dr2} alt="Gallery item"className='w-40 h-auto md:w-48 h-auto' />
            <img src={dr3} alt="Gallery item"className='w-40 h-auto md:w-48 h-auto' />
            <img src={main1} alt="Gallery item"className='w-40 h-auto sm:w-48 h-96' />
            <img src={main2} alt="Gallery item"className='w-40 h-auto md:w-48 h-auto' />
            <img src={main3} alt="Gallery item"className='w-40 h-auto md:w-48 h-auto' />
          </div>
        </div>
      </div>

      
    </footer>
    <div className="bg-teal-500 py-4 w-full ">
    <div className="max-w-7xl mx-auto flex flex-col cursor-pointer md:flex-row justify-between text-white text-sm items-center">
      <p className="text-center md:text-left">Copyright © 2000-2020 logo.com. All rights reserved</p>
      <div className="mt-2 md:mt-0">
        <a href="#" className="mx-2">Privacy Policy</a>
        <a href="#" className="mx-2">Term of Use</a>
        <a href="#" className="mx-2">Partner</a>
      </div>
    </div>
  </div>
  </>
  );
}

export default Footer;













