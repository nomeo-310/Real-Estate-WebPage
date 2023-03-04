import React from 'react'
import './featured.scss';
import HouseCard from './HouseCard';
import CompareCard from './CompareCard';

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
    const compareData = [
        {
            id:1,
            name: 'Sole-Ownership',
            list_item: [
                {
                    heading: 'Choose a property',
                    info: 'Browse and select any of our pre-vetted properties that matchyour investment appetite.'
                },
                {
                    heading: 'Get financing approval',
                    info: 'Apply for financing in 5mins and get approval in 24hrs. 5% of the downpayment is required as original fee, and it refundable if you are not approved.'
                },
                {
                    heading: 'Complete documentation',
                    info: 'Apply for financing in 5mins and get approval in 24hrs. 5% of the downpayment is required as original fee, and it refundable if you are not approved.'
                },
                {
                    heading: 'Take ownership',
                    info: 'Property title will be transferred to you once payback is completed. You can buyout/sell property'
                },
            ]
        },
        {
            id:2,
            name: 'Co-Ownership',
            list_item: [
                {
                    heading: 'Choose a property',
                    info: 'Browse and select any of our pre-vetted properties that matchyour investment appetite.'
                },
                {
                    heading: 'Buy shares',
                    info: 'Review all terms, sign documents and pay for your shares'
                },
                {
                    heading: 'Get ownership ceertificate',
                    info: 'Your share certificate is your right of ownership to the shares you bought.'
                },
                {
                    heading: 'Earn income & appreciation',
                    info: 'Earn your share of rent and watch your shares appreciate while we manage the property.'
                },
            ]
        }
    ]
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
        </div>
    </div>
  )
}

export default Featured;
