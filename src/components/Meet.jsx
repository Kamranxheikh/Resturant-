import React from 'react';
import chef1 from '../assets/images/chef1.png';

const chefsData = [
    {
        img: chef1,
        name: "D. Estwood kin",
        order: "chef"

    },
    {
        img: chef1,
        name: "A. Silva Sous ky",
        order: "chef"
    },
    {
        img: chef1,
        name: "M. Johnson Pastry",
        order: "chef"


    },
    {
        img: chef1,
        name: "K. Thompson Line",
        order: "chef"

    }
];

const Meet = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-20 mb-3">
                <h1 className="text-5xl mb-6 font-fede-ro">Meet Our Chefs</h1>
            </div>
            <div className="grid grid-cols-1 p-8 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6">

                {
                    chefsData.map((chef, index) => (
                        <div key={index}
                            className="flex flex-col border-2 border-gray-900   justify-center sm:h-[300px] md:h-[400px] items-center w-full h-[500px] rounded-lg 
                            shadow-4xl bg-white hover:shadow-3xl transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-105 mb-10"
                            style={{ backgroundImage: `url(${chef.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                            <div className=" ">
                          <h2 className="text-lg absolute bottom-0 left-0 rounded-tr-2xl  h-20 w-40  bg-white   font-fede-ro">{chef.name}<br />{chef.order}</h2>

                            </div>

                        </div>


                    ))}

            </div>




            <div className="flex justify-center items-center  mb-10">
                <button className="bg-teal-500 text-white text-lg font-semibold py-2 px-6 rounded 
        hover:bg-teal-600">
                    Book Now
                </button>
            </div>

        </>

    );
}

export default Meet;




















        // <>
        //     <div className="flex justify-center items-center mt-20 mb-10">
        //         <h1 className="text-5xl mb-6 font-fede-ro">Meet Our Chefs</h1>
        //     </div>
        //     <div className="grid grid-cols-1 justify-center items-center    ">

        //         {
        //             chefsData.map((chef, index) => (
        //                 <div key={index} className="flex  flex-col justify-center p-auto items-center w-[300px] h-[500px]        rounded-lg  
        //                 shadow-lg bg-white hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105  mb-10" style={{ backgroundImage: `url(${chef.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        //                     <div className="  ">
        //                         <h2 className="text-lg absolute bottom-0 left-0 rounded-tr-xl  h-20 w-40  bg-white   font-fede-ro">{chef.name}<br />{chef.order}</h2>

        //                     </div>

        //                 </div>


        //             ))}
        //     </div>
        //     <div className="flex justify-center items-center mt-16 mb-10">
        //         <button className="bg-teal-500 text-white text-lg  font-semibold py-2 px-6 rounded hover:bg-teal-600">
        //             Book Now
        //         </button>
        //     </div>
        // </>

