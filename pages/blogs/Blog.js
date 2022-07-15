import React from 'react'

function Index({ food }) {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/blog')
      .then(res => res.json())
      .then(data => {
        console.log(data.blogs);
        setFoods(data.blogs);
      })
  }, [])
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={foods.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{foods.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

        </div>
      </div>
    </div>
  )
}

export default Index