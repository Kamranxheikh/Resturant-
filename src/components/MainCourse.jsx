import React from 'react';
import main1 from '../assets/images/main1.jpeg';
import main2 from '../assets/images/main2.jpeg';
import main3 from '../assets/images/main3.jpeg';
import main4 from '../assets/images/main4.jpeg';
import main5 from '../assets/images/main5.jpeg';

const MainCourse = () => {
    const mainCourseData = [
        {
            img: main1,
            name: "Kaurma",
            price: "$30.00",
        },
        {
            img: main2,
            name: "Fry Fish",
            price: "$40.00",
        },
        {
            img: main3,
            name: "Chicken Biryani",
            price: "$30.00",
        },
        {
            img: main4, 
            name: "Butter Bread",
            price: "$20.00",
        },
        {
            img: main5,
            name: "Fry Kebab", 
            price: "$25.00",
        },
    ];

    return (
        <>
            <div className='mt-10'>
                {mainCourseData.map((item, index) => (
                    <div key={index} className='flex py-6 space-x-1 md:space-x-20 border-b-2 border-gray-300 mx-10 sm:mx-16 md:mx-24'>
                        <img src={item.img} alt={item.name} className='w-32 h-32  md:w-48 md:h-40' />
                        <h1 className='text-xl mt-8 sm:text-2xl justify-start  md:text-3xl'>{item.name}</h1>
                        <div className='flex justify-end'>
                        <h1 className='flex mt-8 text-xl justify-end sm:text-2xl md:text-3xl sm:pl-52 md:pl-96 '>{item.price}</h1>

                    </div> 
                    
                    </div>
                    
                ))}
            </div>
        </>
    );
}

export default MainCourse;
