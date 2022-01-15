import React from 'react'
import { useLocation } from 'wouter'
import './Header.css'

function Header() {
  const [, setLocation] = useLocation()

  const navigateHome = () => setLocation('/')
  const navigateToProducts = () => setLocation('/products')
  const navigateToAbout = () => setLocation('/about')

  return (
    <div className="Header">
      <div className="Header Left">
        <div
          className="Link Major-Link"
          role="button"
          onClick={navigateHome}
          onKeyPress={navigateHome}
          tabIndex={0}
        >
          BRIJ - Sample
        </div>
      </div>
      <div className="Header Right">
        <div
          className="Link Minor-Link"
          role="button"
          onClick={navigateToProducts}
          onKeyPress={navigateToProducts}
          tabIndex={-1}
        >
          Products
        </div>
        <div
          className="Link Minor-Link"
          role="button"
          onClick={navigateToAbout}
          onKeyPress={navigateToAbout}
          tabIndex={-1}
        >
          About
        </div>
      </div>
    </div>
  )
}

export default Header
