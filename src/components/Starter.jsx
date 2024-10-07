
import React from 'react';
import s1 from '../assets/images/s1.jpeg';
import s2 from '../assets/images/s2.jpeg';
import s3 from '../assets/images/s3.jpeg';
import s4 from '../assets/images/s4.jpeg';
import s5 from '../assets/images/s5.jpeg';

function Starter() {
    const StarterData = [
        {
            img: s1,
            name: "Buied Salad ",
            price: "$20.00",
        },
        {
            img: s4,
            name: "Cake ",
            price: "$40.00",
        },
        {
            img: s3,
            name: "Maukanra ",
            price: "$20.00",
        },
        {
            img: s5,
            name: "Tasty Salad ",
            price: "$20.00",
        },
        {
            img: s2,
            name: "Sweet Delight ",
            price: "$30.00",
        },
    ];

    return (
        <>
            <div className='mt-10'>
                {StarterData.map((starter, index) => (
                    <div key={index} className='flex  py-6 space-x-3  md:space-x-20   border-b-2 border-gray-300 mx-10 sm:mx-16 md:mx-24' >


                        <img src={starter.img} alt={starter.name} className='w-28 h-28 md:w-48 md:h-40' />
                        <h1 className='text-xl mt-8 sm:text-2xl md:text-3xl '>{starter.name}</h1>
                        <div className='flex justify-end '>
 
                            <h1 className='flex mt-8  text-xl sm:text-2xl md:text-3xl sm:pl-52 md:pl-96  '>{starter.price}</h1>
                        </div>

                        <div>
                        </div>

                    </div>


                ))}

            </div>
        </>

    );
}

export default Starter;
