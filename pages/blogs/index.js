import React from 'react'
import { useState, useEffect } from 'react'
import Blog from './Blog'
import Image from 'next/image'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'


const index = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('food.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])
  return (
    <div>
      <Navbar> </Navbar>

      <div className="grid-container md:grid grid-cols-12">
        <div className=" item1 col-span-8">
          <div className="grid-container md:grid grid-cols-2 gap-4 p-7">
            {
              foods.map(food => <Blog food={food}></Blog>)
            }
          </div>
        </div>
        <div className=" item2 col-span-4">
          <div className='p-7'>
            <div className="form-control">
              <div className="input-group">
                <input className='w-full p-3' type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square bg-slate-200 border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
              </div>
            </div>
            <div className='mt-11 bg-orange-50 p-5 rounded'>
              <h1 className='text-2xl font-medium mb-6'>Recent Post</h1>

              {
                foods.map(food => <div food={food} className='flex items-center mb-5'>
                  <Image width={60} height={80} className='' src={food.img} alt="" />
                  <h4 className='font-medium p-3 text-lg'>{food.name}</h4>
                </div>)
              }

            </div>
          </div>

        </div>
      </div>
      <Footer> </Footer>
    </div>
  )
}

export default index;