import React from 'react'
import './navStyles.css' 
import mainlogo from '../../imgs/mainlogo.png'

function Navbar() {
  return (
   <div className="container">
     <nav className='mt-5'>
    <ul>
        <li><a href="#"><img src={mainlogo} alt="" /></a></li>
        <li><a href="#" className='text-uppercase fs-5'>Products</a></li>
        <li><a href="#" className='text-uppercase fs-5'>Store</a></li>
        <li><a href="#" className='text-uppercase'>Designer</a></li>
        <li><a href="#" className='text-uppercase'>Contact</a></li>
    </ul>
    <a href="#" className="btn mx-2 fs-5">Login</a>
    <a href="#" className="btn mx-2 fs-5">Sign Up</a>
</nav>
   </div>
  )
}

export default Navbar