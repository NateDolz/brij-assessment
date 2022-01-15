import React from 'react'
import { Switch, Route } from 'wouter'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import NotFound from './components/not-found/NotFound'
import ProductsList from './components/products/ProductsList'
import About from './components/about/About'
import Product from './components/products/Product'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={ProductsList} />
        <Route path="/product/:id">
          {(params) => <Product productId={parseInt(params.id, 10)} />}
        </Route>
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
