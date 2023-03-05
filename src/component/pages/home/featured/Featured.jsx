import React from 'react'
import './featured.scss';
import HouseCard from './HouseCard';
import CompareCard from './CompareCard';
import { compareData } from '../../../data/data';
import FeaturedApartments from './FeaturedApartments';
import { investmentData } from '../../../data/data';
import { apartmentData } from '../../../data/data';
import { rentData } from '../../../data/data';
import InvestSingle from '../../house/InvestSingle';
import BuySingle from '../../house/BuySingle';
import RentSingle from '../../house/RentSingle';

const Featured = () => {
    const houseData = [
        {
            id: 1,
            image: require('./images/card_2.jpg'),
            link: 'rent-an-apartment',
            title: 'Rent An Apartment'
        },
        {
            id: 2,
            image: require('./images/card_1.jpg'),
            link: 'buy-an-apartment',
            title: 'Buy An Apartment'
        },
    ]
    const co_Own = {
        title: 'Co-Own an Apartment',
        link: 'invest-in-apartments',
        subtitle: 'Start with what you have. Get annualized appreciation in 5 years. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nulla? Facere in veritatis, reiciendis consequuntur eius adipisci eum amet, sit placeat voluptate vitae dignissimos iusto inventore illo! Magni, repellat quas'
    };
    const buy = {
        title: 'Buy an Apartment',
        link: 'buy-an-apartment',
        subtitle: 'Get a 6 years payback period and enjoy 10 years guaranteed rent. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nulla? Facere in veritatis, reiciendis consequuntur eius adipisci eum amet, sit placeat voluptate vitae dignissimos iusto inventore illo! Magni, repellat quas'
    };
    const rent = {
        title: 'Rent an Apartment',
        link: 'rent-an-apartment',
        subtitle: 'Get a 6 years payback period and enjoy 10 years guaranteed rent. \nLorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nulla? Facere in veritatis, reiciendis consequuntur eius adipisci eum amet, sit placeat voluptate vitae dignissimos iusto inventore illo! Magni, repellat quas'
    };
  return (
    <div className='featured'>
        <div className="container">
            <h2 className="head-title">There is a better way to finance a house</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, temporibus quidem eligendi nulla aperiam rerum inventore explicabo nemo facilis? Pariatur ipsum quisquam ex! Cumque quidem maiores, error autem voluptate corrupti fugiat impedit, asperiores numquam repudiandae, sequi voluptatem accusamus et nostrum.</p>
            <div className="house-card-wrapper">
                {houseData.map((data) => (
                    <HouseCard key={data.id} house={data}/>
                ))}
            </div>
            <h2 className="head-title">Making Real Estate Investment Accessible to all</h2>
            <h3 className='subtitle '>How it works</h3>
            <div className="compare">
                {compareData.map((data) => (
                    <CompareCard key={data.id} cardDetail={data}/>
                ))}
            </div>
            <h2 className="head-title">Featured Apartments</h2>
            <FeaturedApartments featureApartment={co_Own}>
                {investmentData.slice(0,3).map((item) => (
                    <InvestSingle key={item.id} investHouse={item}/>
                ))}
            </FeaturedApartments>
            <FeaturedApartments featureApartment={buy}>
                {apartmentData.slice(0,3).map((item) => (
                    <BuySingle key={item.id} buyHouse={item}/>
                ))}
            </FeaturedApartments>
            <FeaturedApartments featureApartment={rent}>
                {rentData.slice(0,3).map((item) => (
                    <RentSingle key={item.id} rentHouse={item}/>
                ))}
            </FeaturedApartments>
        </div>
    </div>
  )
}

export default Featured;
