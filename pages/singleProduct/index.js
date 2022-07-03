import React, { useState } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Link from 'next/link'
import Description from './Description';
import Information from './Information';
import Review from './Review';

const singleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const [description,setDescription] = useState(true);
    const [information,setInformation] = useState(false);
    const [reviews,setReviews] = useState(false);
    console.log('des',description, 'inf',information,'rev',reviews)
    return (
        <div className='min-h-screen mt-12 mb-8'>
            <div>
                <div className=' grid grid-cols-1 lg:grid-cols-2 '>
                    <div className='h-[1000px] bg-[#faf7f2] mr-6'>
                        <div className='w-3/4 mt-12 mx-auto '>
                            <img src="https://themefie.com/html/foodka/assets/img/shop/single-1.png" alt="" />
                        </div>
                        <div className='sm:flex justify-around w-2/4 mt-8 mx-auto'>
                            <img src="https://themefie.com/html/foodka/assets/img/shop/2.png" alt="" />
                            <img src="https://themefie.com/html/foodka/assets/img/shop/3.png" alt="" />
                            <img src="https://themefie.com/html/foodka/assets/img/shop/1.png" alt="" />
                        </div>
                    </div>
                    <div className='lg:w-3/4 scroll-m-0'>
                        <h1 className='text-5xl'>Maxican Pizza Test Better</h1>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl font-bold'>$27.00</p>
                            <div className='flex items-center my-12'>
                                <p className='flex items-center'><span>4.9</span> <FaStar className='text-[#d80027]' /></p>
                                <FaStar className='text-[#d80027]' /><FaStar className='text-[#d80027]' /><FaStar className='text-[#d80027]' />
                                <p> <FaStarHalf className='text-[#d80027]' /></p>
                            </div>
                        </div>
                        <p>Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta.</p>

                        <div className='grid grid-cols-2 mt-8'>
                            <div>
                                <p className='text-2xl font-semibold mb-6'>Select Size</p>
                                <div className='grid lg:w-3/4 grid-cols-1 gap-4 md:grid-cols-3'>
                                    <button class="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                        10"
                                    </button>
                                    <button class="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                        12"
                                    </button>
                                    <button class="btn btn-circle bg-[#faf7f2] border-0 text-red-600 hover:bg-red-500 hover:text-white font-bold">
                                        14"
                                    </button>
                                </div>
                            </div>
                            <div>
                                <p className='text-2xl  font-semibold'> Select Crust</p>
                                <select class="border-0 focus:border-0  bg-[#faf7f2] mt-6 select select-bordered w-full max-w-xs">
                                    <option disabled selected>-Choose Your Size-</option>
                                    <option>Pizza</option>
                                    <option>Burger</option>
                                    <option>Ramen</option>
                                </select>
                            </div>
                        </div>

                        <div className='flex items-center mt-12 '>
                            <div className='w-2/4 flex   items-center  '>
                                <button onClick={() => {
                                    if (quantity >= 2) {
                                        setQuantity(quantity - 1)
                                    }
                                }} className='p-3 bg-[#faf7f2]'>-</button>
                                <input defaultValue={quantity} className=' w-1/4 text-center p-3 bg-[#faf7f2]' type="number" name="quantity" id="" />
                                <button onClick={() => setQuantity(quantity + 1)} className='p-3 bg-[#faf7f2]'>+</button>
                            </div>
                            <button class="btn btn-warning  p-1 font-bold w-[200px]">ADD TO CART</button>
                        </div>

                        <hr className='my-6' />
                        <div className='text-gray-400'>
                            <span className=''>SKU: PZ2866</span> <span className='mx-12'>Categories: Pizza</span> <span>Tags: Boscaiola,Pizza</span>
                        </div>
                    <div>
                        <div className={`flex items-center mt-28 `}>
                            <h1 onClick={()=>{
                                setInformation(false)
                                setReviews(false)
                                setDescription(true)
                            }} className={`text-xl cursor-pointer font-semibold ${description&& 'text-red-500'}`}>Description</h1>
                            <h1 onClick={()=>{
                                setReviews(false)
                                setDescription(false)
                                setInformation(true)
                            }} className={`text-xl ml-8 cursor-pointer font-semibold ${information&& 'text-red-500'}`}>Additional information</h1>
                            <h1  onClick={()=>{
                                setDescription(false)
                                setInformation(false)
                                setReviews(true)
                            }} className={`text-xl ml-8 cursor-pointer font-semibold ${reviews&& 'text-red-500'}`}>Reviews (1)</h1>
                        </div>
                    </div>
                 <div className='duration-1000'>
                 {
                        description&& <Description />
                    }
                    {
                        information&& <Information />
                    }
                    {
                        reviews&& <Review />
                    }
                 </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleProduct;