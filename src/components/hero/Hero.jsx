import React from 'react'
import './heroStyles.css'
import heroimg from '../../imgs/mainhero.jpg'
import heroimg2 from '../../imgs/mainhero2.jpg'
import Navbar from '../navbar/Navbar'

function Hero() {
  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={heroimg} className="d-block w-100" alt="..." />
            <div className="overlay"><Navbar /></div>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='mb-5 desc'>The latest product from the ecoshop</h5>
              <h2 className='text-uppercase mt-5'>Look beautiful</h2>
              <h1 className='text-uppercase fw-bold'>this season</h1>
              <div className="div d-flex align-items-center justify-content-center mt-5">
              <a href="#" className="btn mx-2 text-uppercase px-4 py-2 fw-bold">shop now</a>
              <h5 className='fw-bold fs-3'>$ 250</h5>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={heroimg2} className="d-block w-100" alt="..." />
            <div className="overlay"></div>
            <div className="carousel-caption d-none d-md-block">
              <h1>second slide label</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Hero