import React from 'react'
import { useLocation } from 'wouter'
import './Home.css'

function Home() {
  const [, setLocation] = useLocation()
  return (
    <div className="Home">
      <p className="Welcome">Welcome To Brij - Sample</p>
      <button
        type="button"
        className="Products Pill-Button"
        onClick={() => setLocation('/products')}
      >
        See products
      </button>
    </div>
  )
}

export default Home
