import React from 'react';

const Information = () => {
    return (
        <div>
            <div className='mt-6'>
                <h1 className='text-2xl font-bold '>About Product</h1>

                <div>
                    <p>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.</p>
                    <p>One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.</p>

                    <div>
                        <p className='text-xl  font-bold mt-4'>Quick View</p>
                        <div className='grid mt-6 gap-6 grid-cols-1 md:grid-cols-2'>
                            <div className='bg-[#faf7f2] flex  p-4 items-center rounded-md justify-evenly'>   
                                <img src="https://themefie.com/html/foodka/assets/img/icon/1.png" alt="" />
                                <p>Fresh Food</p>
                            </div>
                            <div className='bg-[#faf7f2] flex  p-4 items-center rounded-md justify-evenly '>   
                                <img src="https://themefie.com/html/foodka/assets/img/icon/2.png" alt="" />
                                <p> Fast Delivery</p>
                            </div>
                            <div className='bg-[#faf7f2] flex  p-4 items-center rounded-md justify-evenly'>   
                                <img src="https://themefie.com/html/foodka/assets/img/icon/3.png" alt="" />
                                <p> Quality Maintain</p>
                            </div>
                            <div className='bg-[#faf7f2] flex p-4 items-center rounded-md justify-evenly'>   
                                <img src="https://themefie.com/html/foodka/assets/img/icon/4.png" alt="" />
                                <p> 24/7 Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;