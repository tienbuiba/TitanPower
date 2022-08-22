import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import PageNotFound from '../pages/error/PageNotFound';
import Home from '../pages/Home';
import ManufactureDetail from '../pages/ManufactureDetail';
import Manufacturers from '../pages/Manufacturers';
import Market from '../pages/Market';
import MarketDetail from '../pages/MarketDetail';
import OurBusinessDetail from '../pages/OurBussinessDetail';
import Policy from '../pages/Policy';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Products';

export default function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/manufacture-detail/:id" element={<ManufactureDetail />} />
          <Route path="/ourbusiness-detail/:id" element={<OurBusinessDetail />} />
          <Route path="/market-detail/:id" element={<MarketDetail />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}