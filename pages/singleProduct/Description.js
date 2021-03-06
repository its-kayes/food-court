import React from 'react';

const Description = () => {
    return (
        <div className='my-6'>
            <div>
                <p className='text-gray-500'>Pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot</p>
                <div className='md:flex grid gap-6 my-6'>
                    <img src="https://themefie.com/html/foodka/assets/img/blog/single-2.png" alt="" />
                      
                    <img src="https://themefie.com/html/foodka/assets/img/blog/single-3.png" alt="" />
                </div>
                <p className='text-gray-500'>One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I, who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were those of the Italian flag.</p>
            </div>
        </div>
    );
};

export default Description;