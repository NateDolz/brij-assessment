import React from 'react'
import './Product.css'
import { useLocation } from 'wouter'
import products from '../../../constants/productConstants'

interface Props {
  productId: number
}

function ProductListItem({ productId }: Props) {
  const [, setLocation] = useLocation()
  const product = products[productId]

  if (!product) {
    setLocation('/not-found')
    return <div />
  }
  return (
    <div className="Product-Item">
      <div className="Product-Item-Overview">
        <div className="Product-Item-View">
          <img
            src={product.tag.product.image}
            className="Product-Item-Image"
            alt={`${product.tag.product.name} product`}
          />
        </div>
        <div className="Product-Item-Description">
          <span className="Product-Item-Description-Desc">
            Product Description
          </span>
          <div className="Product-Item-Values">
            <span className="Product-Item-KvP">
              <span className="Product-Item-Key">Name:</span>
              <span>{product.tag.product.name}</span>
            </span>
            <span className="Product-Item-KvP">
              <span className="Product-Item-Key">Brand:</span>
              <span>{product.tag.brand.name}</span>
            </span>
            {product.tag.product.variant ? (
              <span className="Product-Item-KvP">
                <span className="Product-Item-Key">Type:</span>
                <span>{product.tag.product.variant}</span>
              </span>
            ) : (
              <span />
            )}
            {product.tag.product.details ? (
              Object.keys(product.tag.product.details).map((key) => (
                <span className="Product-Item-KvP">
                  <span className="Product-Item-Key">{key}:</span>
                  <span>
                    {product.tag.product.details
                      ? product.tag.product.details[key]
                      : 'N/A'}
                  </span>
                </span>
              ))
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
      {product.tag.product.ageRestricted ? (
        <div className="Product-Item-Warning">
          <span className="Icon material-icons">warning</span>
          <span>This item is restricted to customers age 21 and over</span>
        </div>
      ) : (
        <span />
      )}
    </div>
  )
}

export default ProductListItem
