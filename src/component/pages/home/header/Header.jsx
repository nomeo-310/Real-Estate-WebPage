import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './header.scss'
import bannerImage from './images/banner.jpg';

const Header = () => {
    const fadeIntervalMs = 4000;
    const textChangeIntervalMs = fadeIntervalMs * 2;
    const textWords = [
        "Buy a home \nin Lagos \nand pay in 6 years?", 
        "Home ownership \nis not the birthright \nof a few.", 
        "It is possible \nand affordable \nlet us show you how."
    ];
    const subText = [
        "We have a deal for you",
        "Get 80% financing from us today.",
        "Great apartments at cheap price"
    ];
    const locations = [
        {
            id:1,
            name: 'Abraham Adesanya'
        },
        {
            id:2,
            name: 'Eleganza'
        },
        {
            id:3,
            name: 'Ikota'
        },
        {
            id:4,
            name: 'Lekki'
        },
        {
            id:5,
            name: 'Lekki Phase 1'
        },
        {
            id:6,
            name: 'Ologolo'
        },
        {
            id:7,
            name: 'Oniru'
        },
        {
            id:8,
            name: 'Sangotedo'
        },
        {
            id:9,
            name: 'VGC'
        },
        {
            id:10,
            name: 'Yaba'
        },
    ];
    const investmentChoices = [
        {
            id:1,
            name: 'Buy a house'
        },
        {
            id:2,
            name: 'Rent a house'
        },
        {
            id:3,
            name: 'Invest in real estate'
        }
    ]
    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'});
    const [wordOrder, setWordOrder] = useState(0);
    const [investClass, setInvestClass] = useState('');
    const [locationClass, setLocationClass] = useState('');
    const [currentInvestmentChoice, setCurrentInvestmentChoice] = useState('How do you want to invest?');
    const [currentLocationChoice, setCurrentLocationChoice] = useState('Location');
    const [investMenu, setInvestMenu] = useState(false);
    const [locationMenu, setLocationMenu] = useState(false);

    useEffect(() => {
        const fadeTimeOut = setInterval(() => {
            fadeProp.fade === 'fade-in' ? setFadeProp({fade: 'fade-out'}) : setFadeProp({fade: 'fade-in'})
        }, fadeIntervalMs)
        return ()=> clearInterval(fadeTimeOut)
    }, [fadeProp]);

    useEffect(() => {
        const wordTimeOut = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % textWords.length)
        }, textChangeIntervalMs)
        return () => clearInterval(wordTimeOut)
    }, [textChangeIntervalMs]);

    useEffect(() => {
        const wordTimeOut = setInterval(() => {
            setWordOrder((prevWordOrder) => (prevWordOrder + 1) % subText.length)
        }, textChangeIntervalMs)
        return () => clearInterval(wordTimeOut)
    }, [textChangeIntervalMs]);

    const openInvestMenu =()=> {
        setInvestClass('active');
    }
    const closeInvestMenu =()=> {
        setInvestClass('');
    }
    const openInvest =()=> {
        if (investMenu) {
            setInvestMenu(false);
           openInvestMenu(); 
           closeLocationMenu();
        } else {
            setInvestMenu(true);
            closeInvestMenu();
        }
    };
    const InvestmentChoice =(props)=> {
        return (
            <li onClick={()=> setCurrentInvestmentChoice(props.value)}>{props.value}</li>
        )
    };

    const openLocationMenu =()=> {
        setLocationClass('active');
    }
    const closeLocationMenu =()=> {
        setLocationClass('');
    }
    const openLocation =()=> {
        if (locationMenu) {
            setLocationMenu(false);
           openLocationMenu(); 
        } else {
            setLocationMenu(true);
            closeLocationMenu();
        }
    };
    const Location=(props)=> {
        return (
            <li onClick={()=> setCurrentLocationChoice(props.value)}>{props.value}</li>
        )
    };

  return (
    <div className="home-header">
      <div className="container">
        <div className="header-content">
            <div className="text-section">
                <div className="intro-text">
                    <h1 className={fadeProp.fade}>{textWords[wordOrder]}</h1>
                    <h2 className={fadeProp.fade}>{subText[wordOrder]}</h2>
                </div>
                <div className="input-section">
                    <div className={`investment ${investClass}`} onClick={openInvest}>
                        <div className="header">
                            <span>{currentInvestmentChoice}</span>
                            <i className="fa-solid fa-angle-up"></i>
                        </div>
                        <div className="investment-list">
                            {investmentChoices.map((choice) => <InvestmentChoice key={choice.id} value={choice.name}/>)}
                        </div>
                    </div>
                    <div className={`location ${locationClass}`} onClick={openLocation}>
                        <div className="header">
                            <span>{currentLocationChoice}</span>
                            <i className="fa-solid fa-angle-up"></i>
                        </div>
                        <div className="location-list">
                            {locations.map((location) => <Location key={location.id} value={location.name}/>)}
                        </div>
                        
                    </div>
                </div>
                <div className="button">
                    <button>Search</button>
                </div>
            </div>
            <div className="image">
                <img src={bannerImage} alt="header_banner"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
