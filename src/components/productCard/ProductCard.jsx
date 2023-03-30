import React from 'react'
import ecofriendly from '../../imgs/eco-friendly.png'
import './productCardStyles.css' 

function ProductCard() {
    return (
        <div className="product-card-wrapper ">
            <div className="card w-75 border-0 float-right">
               <div className="img">
               <img src={ecofriendly} className="card-img-top w-75" alt="..." />
               </div>
                <div className="card-body text-right">
                    <h5 className="card-title fw-bold">Card title</h5>
                    <p className="card-text text-align-justify mb-0">Some quick example text to build on the card</p>
                    <p className="card-text text-align-justify mt-0">Some quick example text to build on the card</p>
                    <a href="#" className="btn fw-bold fs-6 px-3">Buy Now</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCard