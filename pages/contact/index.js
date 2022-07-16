import Image from 'next/image';
import React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Navbar } from '../../components/Navbar/Navbar';

const index = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <div className='flex justify-around bg-[#FAF7F2] h-screen items-center p-40'>
                <div className=''>
                    <div className='flex mt-6'>
                        <Image src='/location.png' alt='location' width='25px' height='25px' />
                        <p className='px-3 font-sans  font-semibold'>4920 Trails End Road Ft United States, FL 33311</p>
                    </div>
                    <div className='flex mt-6'>
                        <Image src='/envelope.png' alt='envelope' width='25px' height='25px' />
                        <p className='px-3 font-sans  font-semibold'>ordernow@foodka.com</p>
                    </div>
                    <div className='flex mt-6'>
                        <Image src='/phone_002.png' alt='location' width='25px' height='25px' />
                        <p className='px-3 font-sans  font-semibold'>+997 509 153 849</p>
                    </div>
                    <div className='mt-6'>
                        <p>
                            We’re an award-winning creative design studio with a small team and big ideas. We pour passion into projects big and small, providing our expert clients with solutions.
                        </p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex'>
                        <input type="text" placeholder="Your Name" className="font-semibold mx-5 my-10 h-16 input w-full max-w-xs" />
                        <input type="email" placeholder="Your Email" className="font-semibold mx-5 my-10 h-16 input w-full max-w-xs" />
                    </div>
                    <div>
                        <textarea
                            rows='5'
                            cols='80'
                            name='message'
                            className=' form-control font-semibold formInput rounded-2xl mx-5 p-8'
                            placeholder='Message...'
                        ></textarea>
                    </div>
                    <div className='mx-5 my-10'>
                        <button className='font-semibold text-white bg-[#CE2829] py-3 px-12  text-xl rounded-full '>
                            Submit your Massage
                        </button>
                    </div>
                </div>
            </div>
            <Footer> </Footer>
        </div>
    );
};

export default index;