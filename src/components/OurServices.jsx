import React from 'react'
import { FaConciergeBell, FaUtensils, FaCalendarAlt } from 'react-icons/fa';

const OurServices = () => {    const serviceData = [
        {
            icon: <FaConciergeBell size={50} />,
            title: "Concierge Service",
            text: "Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim"

        },
        {
            icon: <FaUtensils  size={50}/>,
            title: "Dining",
            text: "Lorem ipsum dolor sit amet consectetur. Ut sit dui cogue est. Odio euismod sed amet libero. Scelerisque sed enim"
        },
        {
            icon: <FaCalendarAlt size={50} />,
            title: "Restaurant",
            text: "Lorem ipsum dolor sit amet consectetur. Ut sit dui congue est. Odio euismod sed amet libero. Scelerisque sed enim"


        },

    ];
    return (
        <div className='bg-emerald-100  '>
            <div className="flex  justify-center items-center mt-20 sm:mb-20">
                <h1 className="text-5xl mt-9 font-customSerif">Our Services</h1>
            </div>
            <div className="flex flex-wrap  justify-center items-center mb-11  sm:ml-20 sm:mr-20">
                {serviceData.map((service, index) => (
                    <div key={index} className="w-full md:w-1/3 p-5 rounded-lg mb:10 " >

                        <div className=" flex justify-center text-center  items-center text-gray-400 ">
                           {service.icon}
                        </div>
                        <h2 className="text-2xl justify-center mt-10 text-center items-center mb-2 font-fede-ro">{service.title}</h2>
                        <p className=" flex text-sm font-roboto text-gray-800 mb-10 text-center justify-center items-center">{service.text}</p>

                    </div>


                ))}
            </div>

        </div>
    )
}

export default OurServices