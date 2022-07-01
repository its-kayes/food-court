import React from 'react';
import Image from 'next/image'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai'

const Products = () => {
    return (
        <div>
            <div className="products__header text-center">
                <h1 className='text-3xl text-red-500 mb-2'>Our Products</h1>
                <h1 className='text-4xl font-semibold'>Delicious foods for delicious meal</h1>
            </div>

            <div className="products mt-10">
                <div className="products__category">
                    <div class="grid gap-5 grid-cols-6">
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider active__category border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                        <div className='category__item'>
                            <button class="btn w-full rounded-full tracking-wider border-none">
                                <Image src={`/assets/3_003.png`}
                                    width={30} height={30} alt='cate'
                                />
                                <span className="ml-3">Ramen</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="main__products grid gap-5 grid-cols-4 mt-10">
                    <div className="product__item">
                        <div class="w-full p-4">
                            <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <Image src={`/assets/08.png`} layout='fill' alt='pro' />
                                </div>
                                <div class="p-4">
                                    <div className="flex justify-between items-center">
                                        <h2 class="mt-2 mb-2  font-bold">Spicy pizza</h2>
                                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span>
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
                                            <button class="btn btn-sm"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="product__item">
                        <div class="w-full p-4">
                            <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div class="relative pb-48 overflow-hidden">
                                    <Image src={`/assets/08.png`} layout='fill' alt='pro' />
                                </div>
                                <div class="p-4">
                                    <div className="flex justify-between items-center">
                                        <h2 class="mt-2 mb-2  font-bold">Spicy pizza</h2>
                                        <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Available</span>
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
                                            <button class="btn btn-sm"><AiOutlineShoppingCart className='mr-3' /> Add to Cart</button>
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Products;