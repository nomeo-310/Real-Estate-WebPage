import React from 'react'
import './home.scss';
import Slider from './slider/Slider';
import Header from './header/Header';
import Featured from './featured/Featured';

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Header/>
      <Featured/>
    </div>
  )
}

export default Home;
