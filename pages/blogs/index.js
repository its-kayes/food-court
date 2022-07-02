import React from 'react'
import { useState, useEffect } from 'react'
import Blog from '../blogs/Blog'

const index = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('food.json')
      .then(res => res.json())
      .then(data => setFoods(data))
  }, [])
  return (
    <div>
      <div class="grid-container md:grid grid-cols-12">
        <div className="border-2 item1 col-span-8">
          <div class="grid-container md:grid grid-cols-2 gap-4 p-7">
           {
            foods.map(food=><Blog food={food}></Blog>)
           }
          </div>
        </div>
        <div className="border-2 item2 col-span-4">2</div>
      </div>
    </div>
  )
}
     
export default index;