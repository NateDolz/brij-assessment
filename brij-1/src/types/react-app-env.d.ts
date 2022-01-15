/// <reference types="react-scripts" />

type Product = {
  tag: {
    id: string
    active: boolean
    brand: {
      id: string
      name: string
      active: boolean
    }
    product: {
      id: string
      sku: string
      name: string
      image: string
      variant?: string
      details?: {
        [key: string]: string
      }
      ageRestricted: boolean
    }
  }
}

type ProductMap = {
  [key: number]: Product
}
