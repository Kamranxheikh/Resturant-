import React from 'react'
import map from '../assets/images/map.png';
import StarRating from '../components/StarRating';
const Pouros = () => {
    const PourosData = [
        {
            name: "Pouros and Sons",
            adress:"646 First Street, Quigleyville 36427 country",
            reviews: "768-123 Reviews",
            Number : "0321-1234-123",
            img :map

        },
    ]
  return (
    <div className='m-12 '>
        {PourosData.map((Pouros,index) =>(
            <div key={index} className='bg-white grid grid-cols-1 md:grid-cols-2 '>
                <div className='px-9 py-4  space-y-8'>
                    <h1 className=' text-4xl md:text-6xl pb-6 text-gray-800 font-serif '>{Pouros.name}</h1>
                    <h2 className='text-2xl  md:text-3xl text-gray-500 font-sans'>{Pouros.adress}</h2>
                    <StarRating className='mt-4 text-sm md:text-lg text-gray-500 font-sans' rating={4.5} reviews={50} />

                    

                    <p className='text-xl md:text-3xl text-gray-500 font-sans'>{Pouros.Number}</p>
                </div>
                <div className='px-6 py-4 '>
                <img src={Pouros.img} alt={Pouros.name} className='h-[400px] w-full object-cover'/>

                </div>

            </div>
    
        ) )}
    </div>
  )
}

export default Pouros