import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faClipboardList, } from '@fortawesome/free-solid-svg-icons';
import { RiRestaurant2Fill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import main5 from '../assets/images/main5.jpeg';



const StatsSection = () => {
    const stats = [
        {
            icon: <FontAwesomeIcon icon={faClipboardList} className="w-10 h-10 mb-4 md:h-20 md:w-20" />,
            number: '420',
            label: 'Professional Chefs',
        },
        {
            icon: <IoFastFood className='w-10 h-10 mb-4 md:h-20 md:w-20' />,

            number: '320',
            label: 'Items Of Food',
        },
        {
            icon: <RiRestaurant2Fill className='w-10 h-10 mb-4 md:h-20 md:w-20' />,
            number: '30+',
            label: 'Years Of Experience',
        },
        {
            icon: <FontAwesomeIcon icon={faPizzaSlice} className="w-10 h-10 mb-4 md:h-20 md:w-20" />,
            number: '220',
            label: 'Happy Customers',
        },
    ];
    return (
        <>
            <div className=" py-10 relative  my-16 h-96 w-full"  >
                <img src={main5} className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 absolute inset-0 w-full h-80 md:h-96 brightness-[30%] ">
                </img>

                <div className="relative md:px-20 sm:px-10   md:mt-16 grid grid-cols-2  md:grid-cols-4  sm:grid-cols-2 gap-4    justify-center items-center text-white text-center  ">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col cursor-pointer items-center  text-white">
                            {stat.icon} 
                            <h1 className="md:text-3xl text-xl cursor-pointer ">{stat.number}</h1>
                            <p className="md:text-2xl text-lg cursor-pointer">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default StatsSection;

