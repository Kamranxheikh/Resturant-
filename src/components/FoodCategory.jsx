import React from 'react';
import fc1 from '../assets/images/fc1.png';
import fc2 from '../assets/images/fc2.png';
import fc3 from '../assets/images/fc3.png';
import fc4 from '../assets/images/fc4.png';
const chefsData = [
    {
        img: fc1,
        name: "Dessert",
        order: "chef"

    },
    {
        img: fc2,
        name: "Fast Food",
        order: "chef"
    },
    {
        img: fc3,
        name: "Sushi",
        order: "chef"


    },
    {
        img: fc4,
        name: "Cake",
        order: "chef"

    }
];

const FoodCategory = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-20 mb-3">
                <h1 className="text-5xl mb-6 font-customSerif">Food Category</h1>
            </div>
            <div className="grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">

                {
                    chefsData.map((chef, index) => (
                        <div key={index}
                            className="flex flex-col border-2 border-gray-900   justify-center sm:h-[250px] md:h-[330px] items-center w-full h-[350px] rounded-lg 
                            shadow-4xl bg-white hover:shadow-3xl transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105 mb-10"
                            style={{ backgroundImage: `url(${chef.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                            <div className=" ">
                                <button className="bg-teal-500 text-white  py-2 px-4  rounded hover:bg-teal-600">
                                    {chef.name}
                                </button>
                            </div>
                        </div>
                    ))}
            </div>
        </>

    );
}

export default FoodCategory;




















