import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import SignUp from './landing_page/signup/SignUp';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/Login';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
  </React.StrictMode>
);

  