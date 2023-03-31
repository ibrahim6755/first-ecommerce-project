import React from 'react'
import ProductCardLeft from '../productCardLeft/ProductCardLeft'
import ProductCardRight from '../productCardRight/ProductCardRight'

function ProductSection() {
  return (
    <div className="container">
        <div className="product-section-wrapper">
        <div className="row py-5 px-5">
            <div className="col-md-6">
                <ProductCardLeft/>
            </div>
            <div className="col-md-6">
                <ProductCardRight/>
            </div>
        </div>
        <div className="row py-5 px-5">
        <div className="col-md-6">
                <ProductCardLeft/>
            </div>
            <div className="col-md-6">
                <ProductCardRight/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductSection