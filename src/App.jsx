import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import { HomePage } from './pages/HomePage';
import { SingleRoute } from './pages/singleRoute';
import MyCart from './route/MyCart.jsx/MyCart';
import AllCategories from './route/AllCategories/AllCategories';
import ZaraProducts from './route/ZaraProducts/ZaraProducts';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:id" element={<SingleRoute />} />
          <Route path="cart" element={<MyCart />} />
          <Route path="all-categories" element={<AllCategories />} />
          <Route path="zara-products" element={<ZaraProducts />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
