import React from 'react'
import { useLocation } from 'wouter'
import './ProductListItem.css'

interface Props {
  product: Product
}

function ProductListItem({ product }: Props) {
  const [, setLocation] = useLocation()
  return (
    <div
      role="button"
      tabIndex={0 - parseInt(product.tag.id, 10)}
      className="Product-Overview"
      onClick={() => setLocation(`/product/${product.tag.id}`)}
      onKeyPress={() => setLocation(`/product/${product.tag.id}`)}
    >
      <span className="Product-Overview-Brand Product-Overview-Item">
        {product.tag.brand.name}
      </span>
      <img
        src={product.tag.product.image}
        className="Product-Overview-Image  Product-Overview-Item"
        alt={`${product.tag.product.name} product`}
      />
      <span className="Product-Overview-Name  Product-Overview-Item">
        {product.tag.product.name}
      </span>
    </div>
  )
}

export default ProductListItem
