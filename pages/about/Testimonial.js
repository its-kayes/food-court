import React from "react";

const Testimonial = () => {
  return (
    <div className="carousel w-1/2 text-center py-32" style={{ margin: '0 auto' }}>

      <div id="slide1" className="carousel-item relative w-full">
        <div style={{ margin: '0 auto' }} className="testimonial_content w-3/4">
          <p className="text-3xl">“We have no regrets! I dont know what else to say. It really saves me time and effort. Food is exactly what our business has been lacking”</p>
          <h3 className="text-4xl mt-5">Davis J. Rulia </h3>
          <h6 className="text-2xl">Food Bloger</h6>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div style={{ margin: '0 auto' }} className="testimonial_content w-3/4">
          <p className="text-3xl">“We have no regrets! I dont know what else to say. It really saves me time and effort. Food is exactly what our business has been lacking”</p>
          <h3 className="text-4xl mt-5">Davis J. Rulia </h3>
          <h6 className="text-2xl">Food Bloger</h6>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <div style={{ margin: '0 auto' }} className="testimonial_content w-3/4">
          <p className="text-3xl">“We have no regrets! I dont know what else to say. It really saves me time and effort. Food is exactly what our business has been lacking”</p>
          <h3 className="text-4xl mt-5">Davis J. Rulia </h3>
          <h6 className="text-2xl">Food Bloger</h6>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

    </div>
  );
};

export default Testimonial;
