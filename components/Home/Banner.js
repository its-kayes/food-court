import Image from 'next/image'
import React from 'react'

export const Banner = () => {
  return (
    <div className='bg-[#faf7f2]'>
      <div style={{
        backgroundImage: `url(https://themefie.com/html/foodka/assets/img/home-2/banner/bg.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundClip: 'initial',
        backgroundAttachment: 'initial',
        backgroundOrigin: 'initial',
        backgroundPositionX: 'right',
        backgroundPositionY: 'center',
        backgroundPosition: 'right',
        backgroundAttachment: 'initial',
        backgroundOrigin: 'initial',
        backgroundSize: 'contain',
        transition: 'background-size 1s ease-in-out',
        left: ' -1.40938%',
        top: '-1.97633%',

      }} className='bg-[#faf7f2]'>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img width={800} src="https://i.ibb.co/WxJctzG/1-007.png" alt="img" className='mr-5 mt-56' />
            <div className='mb-32'>
              <h1 className="text-3xl font-bold awesome-title text-red-600">Japanese Test</h1>
              <p className="py-6 text-6xl font-semibold">Different Spice For A Different Taste</p>
              <p>You need not only Just Food Stalls with Persons but also specialized equipment  start the Fast Food</p>
              <button className="hover:bg-transparent duration-500 ease-in btn rounded-full border-0 text-black p-1 mt-8"><span className='btn rounded-full border-0 text-black px-12  bg-[#fdc913] hover:bg-[#fdc913]'>Get IT NOW</span></button>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-11/12 sm:w-full mx-auto pb-12 '>
        <div className=" min-w-min bg-base-100 hover:rounded-2xl rounded-2xl">
          <div onVolumeChange={() => console.log('ok focus done')} className="card-body rounded-2xl hover:rounded-2xl hover:bg-[#fdc913] duration-1000 ease-in">
            <div className='flex justify-center'>
              <img width={100} src="https://i.ibb.co/HnGYb4Z/calendar-removebg-preview.png " alt="" />
            </div>
            <p className='text-xl font-bold mt-[-30px] text-center'>Mon-fri : 10AM -9:30PM</p>
            <p className='text-center'>Working Hours</p>
          </div>
        </div>
        <div className=" min-w-min bg-base-100 hover:rounded-2xl rounded-2xl">
          <div className="card-body rounded-2xl hover:rounded-2xl hover:bg-[#fdc913] duration-1000 ease-in">
            <div className='flex justify-center'>
              <img width={100} src="https://i.ibb.co/smjp03S/map-marker-removebg-preview.png" alt="" />
            </div>
            <p className='text-xl font-bold text-center  mt-[-30px]'>Trails End Road Ft United States</p>
            <p className='text-center'>Store Location

            </p>
          </div>
        </div>
        <div className=" min-w-min bg-base-100 hover:rounded-2xl rounded-2xl">
          <div className="card-body rounded-2xl hover:rounded-2xl hover:bg-[#fdc913] duration-1000 ease-in">
            <div className='flex justify-center'>
              <img width={100} src="https://i.ibb.co/58K5j3L/phone-2-removebg-preview.png" alt="" />
            </div>
            <p className='text-xl font-bold text-center  mt-[-30px]'>01861548794</p>
            <p className='text-center'>Working Hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
