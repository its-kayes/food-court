import React from 'react';
import Image from 'next/image'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'

const Product = ({ product }) => {

    const { title, img, status, price, ratings } = product;

    return (
        <div className="product__item">
            <div className="w-full p-4">
                <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 overflow-hidden">
                        <Image src={`/assets/08.png`} layout='fill' alt='pro' />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="mt-2 mb-2  font-bold">{ title }</h2>
                            {
                                status ?  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span> :  <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-red-800 rounded-full font-semibold uppercase tracking-wide text-xs">Not Available</span>
                            }
                           
                        </div>

                        <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <div className="ratings flex items-center my-4">
                            <h2>Rating: </h2>
                            <div className='flex items-center ml-5'>
                                <AiFillStar className='text-yellow-300' />
                                <AiFillStar className='text-yellow-300' />
                                <AiFillStar className='text-yellow-300' />
                                <AiFillStar className='text-yellow-300' />
                                <AiFillStar className='text-yellow-300' />
                            </div>
                        </div>
                        <div class="mt-3 flex justify-between items-center">
                            <div>
                                <span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">BDT</span>
                            </div>
                            <div>
                                <button class="btn btn-sm text-white"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Product;