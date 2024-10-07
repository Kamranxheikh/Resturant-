import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  {addToCart } from '../redux/CartSlice';
import main1 from '../assets/images/main1.jpeg';
import main2 from '../assets/images/main2.jpeg';
import main3 from '../assets/images/main3.jpeg';
import main5 from '../assets/images/main5.jpeg';

const productData = [
    { id: 1, imgSrc: main1, name: "Product 1", price: 54.00 },
    { id: 2, imgSrc: main2, name: "Product 2", price: 45.00 },
    { id: 3, imgSrc: main3, name: "Product 3", price: 60.00 },
    { id: 4, imgSrc: main5, name: "Product 4", price: 70.00 },
];

function ProductPage() {
    const dispatch = useDispatch();
    const [selectedProduct, setSelectedProduct] = useState(productData[0]);
    const [quantity, setQuantity] = useState(1);

    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
    };

    const handleQuantityChange = (action) => {
        if (action === 'increase') {
            setQuantity(quantity + 1);
        } else if (action === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        const productToAdd = { ...selectedProduct, quantity };
        dispatch(addToCart(productToAdd)); 
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:p-1 md:grid-cols-2 p-4 sm:px-7 md:px-10'>
                <div className="container  md:my-12  my-8 flex">
                    {/* Product Images */}
                    <div className="space-y-2 sm:space-y-2 md:space-y-4">
                        {productData.map((product) => (
                            <img
                                key={product.id}
                                src={product.imgSrc}
                                alt={`Product ${product.id}`}
                                className="w-[125px] cursor-pointer h-[94px] md:h-[125px] hover:border-2 border-teal-500"
                                onClick={() => handleImageClick(product)}
                            />
                        ))}
                    </div>
                    <div className="ml-2 sm:ml-4 md:ml-6">
                        <div className="">
                            <img src={selectedProduct.imgSrc} alt="Selected Product"
                                className="w-76 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 md:w-[500px] h-[400px] md:h-[550px]" />
                        </div>
                    </div>
                </div>

                <div className='flex container sm:mx-4 sm:my-8 md:mx-6 md:my-12 pr-6 w-full'>
                    <div className="w-full pl-8 space-y-8 ">
                        <h1 className="text-4xl font-semibold ">{selectedProduct.name}</h1>
                        <p className="text-gray-500 mt-2">Category: Pizza</p>
                        <p className="mt-4 text-lg text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
                            vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
                            risus. Lacus nisi, et ac dapibus sit eu velit in consequat
                        </p>

                        <div className="text-3xl font-bold mt-4">${(selectedProduct.price * quantity).toFixed(2)}</div>

                        <div className="flex items-center mt-4">
                            <span className="text-red-500">★★★★★</span>
                            <span className="ml-2 text-gray-700">5.0 Rating | 22 Reviews</span>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold">Quantity</p>
                            <div className="flex items-center mt-2">
                                <button
                                    className="border border-gray-800 px-5 py-1"
                                    onClick={() => handleQuantityChange('decrease')}
                                >
                                    -
                                </button>
                                <span className="mx-4">{quantity}</span>
                                <button
                                    className="border border-gray-800 px-5 py-1"
                                    onClick={() => handleQuantityChange('increase')}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <Link to="/Cart" className=''>
                            
                            <span>
                            <button 
                            className="mt-6 bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
                            onClick={handleAddToCart} 
                        >
                            Add to Cart
                        </button>
                            </span>
                        </Link>


                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
