import React from 'react'
import './navStyles.css'
import mainlogo from '../../imgs/mainlogo.png'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg mt-5">
        <div className="container">
        <li><a href="#"><img src={mainlogo} alt="" /></a></li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><a href="#" className='text-uppercase'>Products</a></li>
            <li><a href="#" className='text-uppercase '>Store</a></li>
            <li><a href="#" className='text-uppercase'>Designer</a></li>
            <li><a href="#" className='text-uppercase'>Contact</a></li>
            </ul>
            <form className="d-flex" role="search">
            <a href="#" className="btn mx-2 ">Login</a>
            <a href="#" className="btn mx-2 ">Sign Up</a>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}


export default Navbar