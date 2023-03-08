import React from 'react'
import './home.scss';
import Header from './header/Header';
import Featured from './featured/Featured';

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <Featured/>
    </div>
  )
}

export default Home;
