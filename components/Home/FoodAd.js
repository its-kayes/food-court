import Image from 'next/image';
import React from 'react';
import { bgWrap, bgText } from '../../styles/FoodAd.module.css'

const FoodAd = () => {
    return (
        <div className='px-10'>
            <div className='flex lg:justify-evenly lg:flex-row sm:flex-col bg-[#FDC913] lg:items-center rounded-2xl px-10'>
                <div className='flex flex-col'>
                    <i className='sm:text-lg lg:text-5xl font-sans-serif'> Double Cheese </i>
                    <span className='text-[#CE2829] font-bold sm:text-2xl lg:text-7xl py-3 '> BURGER </span>
                    <span className='sm:text-sm lg:text-2xl'> With Free Cocacola. Stay home ,</span>
                    <span className='text-2xl'> we deliver  </span>
                </div>
                <div>
                    <Image src="/adBg.png" alt='coca' width="800%" height="400%" />
                </div>
            </div>


            <div className='lg:flex lg:justify-around my-10 sm:grid sm:grid-rows-1  '>
                <div className='bg-[#000000] p-6 rounded-2xl lg:w-[30%] my-10 sm:w-full '>
                    <div className='flex flex-col'>
                        <span className='text-[#FDC913] text-4xl font-bold  py-2 '> Enjoy 30% CashBack </span>
                        <span className='text-3xl text-white py-2 '> Up to $70 on all Bikash </span>
                    </div>
                    <div>
                        <Image src="/ad1.png" alt='coca' width="350%" height="300%" />
                    </div>
                </div>
                <div className='bg-[#F8F7F2] p-6 rounded-2xl lg:w-[30%] sm:w-full my-10'>
                    <div className='flex flex-col items-center '>
                        <span className='text-[#CE2829] text-4xl font-bold'> 25 EXTRA </span>
                        <span className='text-5xl font-bold'> FREE ON KFC </span>
                        <span> Stay home , we deliver </span>
                    </div>
                    <div>
                        <Image src="/ad2.png" alt='coca' width="400%" height="300%" />
                    </div>
                </div>
                <div className='bg-[#39251D] items-center p-6 rounded-2xl lg:w-[30%] w-full sm:my-10'>
                    <div className='flex flex-col '>
                        <i className='text-[#FDC913] font-serif text-2xl'> Text with </i>
                        <span className='text-4xl font-bold text-[#FDC913]'> JAPANESE </span>
                        <span className='text-4xl font-bold text-white'> FOOD AT HOME </span>
                    </div>
                    <div className=' flex justify-center '>
                        <Image  src="/ad3.png" alt='coca' width="300%" height="300%" />
                    </div>
                </div>
            </div>


            {/* <div className={bgWrap}>
                <Image
                    alt="Mountains"
                    src="/ad.png"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <p className={bgText}>
                Image Component
                <br />
                as a Background
            </p> */}

        </div >
    );
};

export default FoodAd;