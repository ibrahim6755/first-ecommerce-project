import React from 'react'
import './navStyles.css'
import mainlogo from '../../imgs/mainlogo.png'

function Navbar() {
  return (
    <div className="container">
      <nav className='mt-5'>
        <ul>
          <li><a href="#"><img src={mainlogo} alt="" /></a></li>
          <li><a href="#" className='text-uppercase'>Products</a></li>
          <li><a href="#" className='text-uppercase '>Store</a></li>
          <li><a href="#" className='text-uppercase'>Designer</a></li>
          <li><a href="#" className='text-uppercase'>Contact</a></li>
        </ul>
        <a href="#" className="btn mx-2 ">Login</a>
        <a href="#" className="btn mx-2 ">Sign Up</a>
      </nav>
    </div>
  )
}

export default Navbar