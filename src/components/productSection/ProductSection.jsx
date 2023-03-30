import React from 'react'
import ProductCard from '../productCard/ProductCard'

function ProductSection() {
  return (
    <div className="container">
        <div className="product-section-wrapper">
        <div className="row">
            <div className="col-md-6">
                <ProductCard/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProductSection