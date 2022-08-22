import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import ConnectivityProduct from '../pages/ConnectivityProduct';
import Contact from '../pages/Contact';
import ElectromecProduct from '../pages/ElectromecProduct';
import PageNotFound from '../pages/error/PageNotFound';
import Home from '../pages/Home';
import InterconnectionProduct from '../pages/InterconnectionProduct';
import ManufactureDetail from '../pages/ManufactureDetail';
import Manufacturers from '../pages/Manufacturers';
import Market from '../pages/Market';
import MarketDetail from '../pages/MarketDetail';
import OurBusinessDetail from '../pages/OurBussinessDetail';
import PassivesProduct from '../pages/PassivesProduct';
import Policy from '../pages/Policy';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Products';
import SemiProduct from '../pages/SemiProduct';

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
          <Route path="/passives-products" element={<PassivesProduct />} />
          <Route path="/semi-products" element={<SemiProduct />} />
          <Route path="/connectivity-products" element={<ConnectivityProduct />} />
          <Route path="/interconect-products" element={<InterconnectionProduct />} />
          <Route path="/electromec-products" element={<ElectromecProduct />} />
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