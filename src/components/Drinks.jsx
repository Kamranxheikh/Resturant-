import React from 'react';
import dr1 from '../assets/images/dr1.jpeg';
import dr2 from '../assets/images/dr2.jpeg';
import dr3 from '../assets/images/dr3.jpeg';
import dr4 from '../assets/images/dr4.jpeg';
import dr6 from '../assets/images/dr6.jpeg';


const Drinks = () => {
    const DrinksData = [
        {
            img: dr6,
            name: "Green Goddess", 
            price: "$15.00",
        },
        {
            img: dr1,
            name: "Mint mojito", 
            price: "$20.00",
        },
        {
            img: dr2,
            name: "Rainbow Splash", 
            price: "$15.00",
        },
        {
            img: dr3,
            name: "Refreshing Mint", 
            price: "$10.00",
        },
        {
            img: dr4,
            name: "Fresh Fressca", 
            price: "$10.00",
        },
    ];

    return (
        <>
            <div className='mt-10'>
                {DrinksData.map((drink, index) => (
                    <div key={index} className='flex py-6 space-x-6 md:space-x-20 border-b-2 border-gray-300 mx-10 sm:mx-16 md:mx-24'>
                        <img src={drink.img} alt={drink.name} className='w-32 h-32 md:w-48 md:h-40' /> 
                        <h1 className='text-xl mt-8 sm:text-2xl md:text-3xl'>{drink.name}</h1>
                        <div className='flex justify-end'>
                            <h1 className='flex mt-8 text-xl sm:text-2xl md:text-3xl sm:pl-52 md:pl-96'>{drink.price}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Drinks;
