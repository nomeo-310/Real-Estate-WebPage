import React from 'react'
import './nav-bar.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { navItems } from '../data/data';

const NavBar = () => {
  const [navClass, setNavClass] = useState('nav-bar');
  const [navWrap, setNavWrap] = useState('');
  const [hamburgerClass, setHamburgerClass] = useState('inactive');
  const [className, setClassName] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const openMenu =()=> {
    setNavWrap('active');
    setHamburgerClass('active');
    setClassName('show');
  };

  const closeMenu =()=> {
    setNavWrap('');
    setHamburgerClass('inactive');
    setClassName('');
  };

  const toggleMenu = ()=> {
    if (showMenu) {
      setShowMenu(false);
      openMenu();
    } else {
      setShowMenu(true);
      closeMenu();
    }
  };

  const navbarFixed =()=> {
    if (window.scrollY >= 65) {
        setNavClass('nav-bar fixed')
    } else {
        setNavClass('nav-bar');
    }
};

useEffect(() => {
    window.addEventListener('scroll', navbarFixed)
}, []);

  return (
    <div className={navClass}>
      <div className={`nav-wrapper ${navWrap}`}>
        <div className="nav-left">
          <div className="brand-name">
            <h2><Link to="/" className="link">nomeo realtors</Link></h2>
          </div>
          <div className="hamburger-wrapper">
            <div className={`hamburger-menu ${hamburgerClass}`} onClick={toggleMenu}></div>
          </div>
        </div>
        <div className={`nav-center ${className}`}>
          <div className="nav-list">
            {navItems.map((navItem, index) => (<li className="nav-item" key={index}><NavLink to={navItem.path} className="nav-link">{navItem.name}</NavLink></li>))}
          </div>
        </div>
        <div className={`nav-right ${className}`}>
            <div className="search">
              <input type="text" placeholder="Search apartment by locations..."/>
              <div className="icons">
                <span className="mdi mdi-magnify"></span>
                <span className="mdi mdi-close"></span>
              </div>
              
            </div>
            <i className="register">
              <span className="mdi mdi-account"></span>
            </i>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
