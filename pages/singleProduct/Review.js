import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='md:flex mt-6'>
                <div>
                    <img width={300} src="https://themefie.com/html/foodka/assets/img/blog/comment.png" alt="" />
                </div>
                <div className='ml-6'>
                    <p className='text-xl mb-2 font-bold'> Haslida heris</p>
                    <p>20 Feb 2020 at 4:00 pm</p>
                    <p className='mt-4'>I love it here! Everyone is so friendly-food is great & the wine is fabulous as well. This a great place to grab a glass wine or two with your friends & some delicuous food. i am very happy to habe this located downtown.</p>
                </div>
            </div>
            <hr className='my-8' />
            <form>
                <div className='md:flex grid justify-between gap-6'>
                    <input type="text" placeholder="Type here" className="p-4 rounded-md  w-full max-w-xs outline-none bg-[#faf7f2]" />
                    <input type="text" placeholder="Type here" className="p-4 rounded-md  w-full max-w-xs outline-none bg-[#faf7f2]" />
                </div>
                <textarea placeholder='Review' className='bg-[#faf7f2] p-6 outline-none mt-4 ' name="" id="" cols="78" rows="5"></textarea>
                <input className="btn btn-error bg-[#ce2829] text-white font-bold w-[200px] mt-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Review;