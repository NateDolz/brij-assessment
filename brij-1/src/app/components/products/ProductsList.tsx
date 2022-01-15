import React from 'react'
import products from '../../../constants/productConstants'
import ProductListItem from './ProductListItem'
import './ProductsList.css'

function Products() {
  return (
    <div className="Products-List">
      {Object.values(products).map((prod) => {
        return <ProductListItem key={prod.tag.id} product={prod} />
      })}
    </div>
  )
}

export default Products
