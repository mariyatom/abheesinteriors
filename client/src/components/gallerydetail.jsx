import React from 'react'
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './gallerydetail.css'
function Gallerydetail() {
    const {state} = useLocation(); 
    const {data} = state; 
  return (
    <>
    <div className='mainitems'>
    <Carousel className="carousel-multi-item" interval={3} controls={false}   >
    <Carousel.Item>
      <div className="row">
        {data.map((item, index) => (
          <div key={index} className="col-md-4">
            <img
              className="d-block w-100 gitemInfo"
              src={item.name} 
              alt="carousel item"
            />
          </div>
        ))}
      </div>
    </Carousel.Item>
  </Carousel>



    </div>
    </>
  )
}

export default Gallerydetail