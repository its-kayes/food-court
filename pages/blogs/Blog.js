import React from 'react'

function index({food}) {
   const {name,img}=food;
  return (
    <div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
              <figure><img src={img} alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                
              </div>
            </div>
    </div>
  )
}

export default index