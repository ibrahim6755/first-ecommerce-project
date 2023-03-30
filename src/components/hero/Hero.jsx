import React from 'react'
import './heroStyles.css'
import heroimg from '../../imgs/mainhero.jpg'

function Hero() {
  return (
    <>
    <div className="hero-wrapper">
      <img src={heroimg} alt="" />
    </div>
    <div className="overlay"></div>
    </>
  )
}

export default Hero