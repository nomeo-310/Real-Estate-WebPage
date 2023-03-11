import React from 'react';
import './tab.scss'
import { useState } from 'react';
import TabContent from './TabContent';

const Tab = () => {

  const lagosData = ['Abraham Adesanya', 'Agunji', 'Amuwo-Odofin', 'Arepo', 'Awoyaya', 'Chevron', 'Eleganza', 'Elegushi', 'Ikate',
  'Ikeja', 'Ikota', 'Ikoyi', 'Lekki', 'Lekki Phase 1', 'Ologolo', 'Oniru', 'Owode', 'Sangotedo'];

  const abujaData = ['Asokoro', 'Jabi', 'Gwarinpa', 'Logokoma', 'Jahi', 'Life Camp', 'Maitama', 'Wuse', 'Apo', 'Abuja Phase 3',
  'Lugbe', 'Dawaki', 'Kubwa', 'Mabushi', 'Dakwo District', 'Katampe', 'Gaduwa', 'Galadimawa'];

  const ibadanData = ['New Bodija', 'Old Bodija', 'Agodi G.R.A', 'Oluyole Estate', 'Iyaganku G.R.A', 'Onikere G.R.A', 'Ikolaba G.R.A', 'Jericho', 'Idi Ishin', 'Ring Road',
  'Akobo Estate', 'Aerodrome Estate', 'Alalubosa G.R.A', 'Kolapo Ishola Estate', 'Ajibode Estate']

  const [activeTab, setActiveTab] =useState('lagos')

  const Navigation =({activeTab, onTabChange})=> {
    const itemClass =(tabName)=> {
      return (
        `nav-item ${activeTab === tabName ? 'selected' : null}`
      );
    }
    return(
      <div className="nav">
        <button className={itemClass('lagos')} onClick={()=> onTabChange('lagos')}>Lagos</button>
        <button className={itemClass('abuja')} onClick={()=> onTabChange('abuja')}>Abuja</button>
        <button className={itemClass('ibadan')} onClick={()=> onTabChange('ibadan')}>Ibadan</button>
      </div>
    )
  }
  const Content =({tab})=> {
    switch (tab) {
      default:
      case 'lagos':
        return (<TabContent data={lagosData}/>)
      case 'abuja':
        return (<TabContent data={abujaData}/>)
      case 'ibadan':
        return (<TabContent data={ibadanData}/>)
    }
  }
  return (
    <div className='tab'>
      <div className="tab-top">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab}/>
      </div>
      <div className="tab-bottom">
        <Content tab={activeTab}/>
      </div>
    </div>
  );
}

export default Tab;
