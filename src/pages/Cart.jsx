
import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import dish1 from '../assets/images/dish1.png';
import Footer from '../components/Footer';
import cart from '../assets/images/cart.webp';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../redux/CartSlice'; 

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, action) => {
        if (action === 'increase') {
            dispatch(incrementQuantity({ id }));
        } else {
            dispatch(decrementQuantity({ id }));
        }
    };

    const handleRemoveItem = (id) => {
        dispatch(removeItem({ id })); 
    };

    return (
        <>
            <Navbar />
            <SideNav />
            <div className='relative'>
                <img
                    src={dish1}
                    alt="Background Image"
                    className="brightness-50 w-full h-[50vh] sm:h-[75vh] md:h-[75vh]
                     md:transition duration-500 md:ease-in-out md:transform md:hover:-translate-y-1 md:hover:scale-105 "
                />
                <div className='absolute top-40 sm:top-48 md:top-1/5 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 text-center'>
                    <h1 className='text-3xl sm:text-4xl md:text-7xl font-normal mb-10 tracking-wider font-customSerif'>Cart</h1>
                </div>
            </div>
            <div className="container mx-auto p-4 mt-20">
                <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
                {cartItems.length === 0 ? (
                    <p className=''>Your cart is empty.
                        <img src={cart} alt="" className=' size-[100px] md:size-[200px] justify-center items-center  ' />
                    </p>

                ) : (
                    <>
                        <div className="space-y-4 ">
                            {cartItems.map((item) => (
                                <div className='flex justify-between items-center border-b py-4 flex-wrap'>
                                    {/* 1  */}                         <div key={item.id} className="flex justify- items-center  py-4">
                                        <img src={item.imgSrc} alt={item.name} className="w-24 h-24 object-cover" />
                                        <div className="flex flex-col flex-grow px-4">
                                            <h1 className="text-2xl mb-6 font-semibold">{item.name}</h1>
                                            <span className="text-red-500">★★★★★</span>

                                        </div>
                                    </div>

                                    {/* 2  */}                          <div className=''>
                                        <h1 className='text-2xl  mb-6'>Price</h1>
                                        <span>${item.price}</span>
                                    </div>
                                    {/* 3  */}                          <div className="">
                                        <h1 className='text-2xl  mb-6'>Quantity</h1>

                                        <button
                                            className="border px-2 py-1"
                                            onClick={() => handleQuantityChange(item.id, 'decrease')}
                                        >
                                            -
                                        </button>
                                        <span className="mx-4">{item.quantity}</span>
                                        <button
                                            className="border px-2 py-1"
                                            onClick={() => handleQuantityChange(item.id, 'increase')}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        className="text-red-500 font-semibold"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='mt-20 grid md:grid-cols-2 grid-cols-1 mb-12'>
                            <div className='space-y-10 '>
                                <h1 className='text-3xl font-serif'>Coupen Code</h1>
                                {/* <input type="text" placeholder="Enter your coupen code" /> */}
                                <input
                                    type="email"
                                    placeholder="Enter Here Code"
                                    className="p-2 ml-3 border  border-gray-400 h-14  rounded-l-md w-1/2 md:w-[80%]"
                                />
                                <button className="p-2 bg-teal-500 text-white h-14 tracking-wide rounded-r-md">
                                    Apply
                                </button>
                            </div>

                            <div className="mt-12 md:mt-0 sm:mt-0 ">
                                <h1 className='text-3xl font-serif mb-6'>Total Bill</h1>
                                <div className='border-2 h-40 mx-6 border-black p-4 py-5 space-y-2'>
                                    <div className='flex justify-between'>
                                        <h1 className='text-xl text-gray-700'>Cart Subtotal</h1>
                                        <span className="text-lg font-semibold "> ${totalAmount.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between border-b-2'>
                                        <h1 className='text-xl text-gray-700'>Shipping Charges</h1>
                                        <span className="text-lg font-semibold ">$00.00</span>


                                    </div>
                                    <div className='flex justify-between pb-12'>
                                        <h1 className='text-xl text-gray-700 my-4'>Total Amount</h1>
                                        <span className="text-lg my-4 font-semibold  "> ${totalAmount.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end mr-7'>
                            <button className='bg-teal-500 px-6 py-3 text-lg rounded-lg '>Order Now</button>

                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;

