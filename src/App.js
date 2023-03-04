import React from 'react';
import './App.scss';
import './css/all.min.css';
import './css/brands.css';
import './css/brands.min.css';
import './css/fontawesome.min.css';
import './material_icons/css/materialdesignicons.css';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/nav-bar/NavBar';
import Footer from './component/footer/Footer';
import PageRouter from './component/page-router/PageRouter';


const App =() => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <PageRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
