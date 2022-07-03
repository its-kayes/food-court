import React from 'react'
import Image from 'next/image';

export const ChooseSection = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full" >
                        <Image width="100%" height="100%" layout="responsive" objectFit="contain" src="https://themefie.com/html/foodka/assets/img/other/about.png" alt='' className="rounded-lg" />
                    </div>
                    <div className='text-center lg:text-left lg:w-full'>
                        <h1 className="text-[#dc3545] mb-4 text-4xl awesome-title">Why choose us</h1>
                        <h1 className="text-5xl font-semibold">Why we are the best</h1>
                        <p className="py-6 text-[#5f5f5f]">A, blandit euismod ullamcorper vestibulum enim habitasse. Ultrices tincidunt scelerisque elit enim. A neque malesuada in tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac et preparation. He wanted to serve burgers, fries and beverages that tasted .</p>
                        <div className="grid lg:grid-cols-2 gap-6 text-[#292929]">

                            <div className="bg-[#FAF7F2] flex items-center justify-center rounded-md p-5 font-semibold text-lg">
                                <Image height={40} width={40} src="https://themefie.com/html/foodka/assets/img/icon/1.png" alt="img" />
                                <h1 className="ml-5">Fresh food</h1>
                            </div>

                            <div className="bg-[#FAF7F2] flex items-center justify-center rounded-md p-5 font-semibold text-lg">
                                <Image height={40} width={40} src="https://themefie.com/html/foodka/assets/img/icon/2.png" alt="img" className='mr-5' />
                                <h1 className="ml-5">Fast Delivery</h1>
                            </div>

                            <div className="bg-[#FAF7F2] flex items-center justify-center rounded-md p-5 font-semibold text-lg">
                                <Image height={40} width={40} src="https://themefie.com/html/foodka/assets/img/icon/3.png" alt="img" className='mr-5' />
                                <h1 className="ml-5">Quality Maintain</h1>
                            </div>

                            <div className="bg-[#FAF7F2] flex items-center justify-center rounded-md p-5 font-semibold text-lg">
                                <Image height={40} width={40} src="https://themefie.com/html/foodka/assets/img/icon/4.png" alt="img" className='mr-5' />
                                <h1 className="ml-5">24/7 Service</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
