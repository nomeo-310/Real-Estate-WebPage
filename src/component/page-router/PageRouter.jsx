import React from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from '../pages/home/Home';
import Gallery from '../pages/gallery/Gallery';
import Contact from '../pages/contact/Contact';
import Rent from '../pages/rent/Rent';

const PageRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/our-gallery' element={<Gallery/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
            <Route path='/rent-an-apartment' element={<Rent/>}/>
        </Routes>
      
    </div>
  );
}

export default PageRouter;
