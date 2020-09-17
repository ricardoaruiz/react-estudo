import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Products/Product';
import About from './pages/About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />}>
        <Route path=":productId" element={<Product />} />
      </Route>
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default AppRoutes;
