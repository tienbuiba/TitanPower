import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/error/PageNotFound';
import Home from '../pages/Home';
import Manufacturers from '../pages/Manufacturers';
import Market from '../pages/Market';
import News from '../pages/News';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Products';

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/market" element={<Market />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}