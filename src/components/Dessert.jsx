
import React from 'react';
import d1 from '../assets/images/d1.jpg';
import d2 from '../assets/images/d2.jpg';
import d3 from '../assets/images/d3.jpg';
import cupcake from '../assets/images/cupcake.webp';
import micupcake from '../assets/images/micupcake.jpg';

const Dessert = () => {
    const DessertData = [
        {
            img: d1,
            name: "Ice Cake",
            price: "$30.00",
        },
        {
            img: d2,
            name: "Stawbery Cake",
            price: "$30.00",
        },
        {
            img: d3,
            name: "Fruit Tart",
            price: "$20.00",
        },
        {
            img: cupcake,
            name: "Cheesecake",
            price: "$20.00",
        },
        {
            img: micupcake,
            name: "Donuts",
            price: "$20.00",
        },
    ];

    return (
        <>
            <div className='mt-10'>
                {DessertData.map((dessert, index) => (
                    <div key={index} className='flex py-6 space-x-12 md:space-x-20 border-b-2 border-gray-300 mx-10 sm:mx-16 md:mx-24'>
                        <img src={dessert.img} alt={dessert.name} className='w-32 h-32 md:w-48 md:h-40' />
                        <h1 className='text-xl mt-8 sm:text-2xl md:text-3xl'>{dessert.name}</h1>
                        <div className='flex justify-end'>
                            <h1 className='flex mt-8 text-xl sm:text-2xl md:text-3xl sm:pl-52 md:pl-96'>{dessert.price}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Dessert;
