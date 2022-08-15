import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import PageNotFound from '../pages/error/PageNotFound';
import Home from '../pages/Home';
import Market from '../pages/Market';
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
          <Route path="*" element={<PageNotFound />} />


        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}