import React from 'react'
import './rent.scss'
import PageHeader from '../../page-header/PageHeader'
import { Link } from 'react-router-dom'
import Tab from '../../tab/Tab'
import FAQ from '../home/featured/FAQ'

const Rent = () => {

    const rentData = {
        main_title: 'Do you want to pay your rent monthly?',
        sub_title: 'Renting does not have to be hard, enjoy the ease that comes with monthly plan'
    }

    const rentImages = {
        rentBanner: require('../../images/rentBanner.jpg'),
        rentSideImage: require('../../images/rentSideImage.jpg'),
        leftImage: require('../../images/leftImage.jpg'),
        bottomImage: require('../../images/bottomImage.jpg'),
        topLeftImage: require('../../images/topLeftImage.jpg'),
        topRightImage: require('../../images/topRightImage.jpg'),

    }

    const rentContentData = [
        {
            id: 1,
            title: 'Zero legal & agency fee',
            sub_title: 'Get connected to verified properties to save brokerage & legal fees. Never any surprises or hidden fees.'
        },
        {
            id: 2,
            title: 'Monthly payment',
            sub_title: 'Subscribe to any of our flexible payment plans and pay your subscription with ease.'
        },
        {
            id: 3,
            title: 'Vetted homes',
            sub_title: 'Browse and filter through our growing listings.'
        },
    ];

    const subscriptionData = [
        {
            id:1, 
            icon: 'mdi-scanner',
            title: 'Sign up & Search',
            content: 'Get instant access to our listings when you regsiteron our platform.'
        },
        {
            id:2, 
            icon: 'mdi-check-decagram-outline',
            title: 'See Verified Listing',
            content: 'Explore our well vetted homes curated just for you.'
        },
        {
            id:3, 
            icon: 'mdi-clock-outline',
            title: 'Shedule A Visit',
            content: 'Take a tour of our properties in person or vitually.'
        },
        {
            id:4, 
            icon: 'mdi-shield-check-outline',
            title: 'Get Verified',
            content: 'Recieve confirmation on your validity and we are good to go.'
        },
        {
            id:5, 
            icon: 'mdi-credit-card',
            title: 'Subscribe & Pay online',
            content: 'Be a part of our community. Enjoy Zero payment hassle.'
        }
    ];
    const rentFunFactData = [
        {
            id:1,
            title: 18,
            subtitle: 'Locations'
        },
        {
            id:2,
            title: '25,000',
            subtitle: 'Monthly Stays'
        },
        {
            id:3,
            title: '1.4Bn',
            subtitle: 'Saved on Legal & Agency fees'
        },
    ];

  return (
    <div className='rent'>
      <PageHeader 
        showSearch={true} 
        image={rentImages.rentBanner}
        main_title={rentData.main_title}
        sub_title={rentData.sub_title} 
        />
        <div className="container">
            <div className="rent-feature">
                <div className="rent-feature-text">
                    <h2>A new & smart way to live</h2>
                    <h3>Out with the old, in with the new. Experience an easier way to live and pay flexibly</h3>
                </div>
                <div className="rent-feature-content">
                    <div className="content-image">
                        <img src={rentImages.rentSideImage} alt="side_image"/>
                    </div>
                    <div className="content-text">
                        {rentContentData.map((data) => (
                            <ul>
                                <li key={data.id}>
                                    <span className="mdi mdi-checkbox-outline"></span>
                                    <div className="inner-text">
                                        <h3>{data.title}</h3>
                                        <h4>{data.sub_title}</h4>
                                    </div>
                                </li>
                            </ul>
                        ))}
                        <div className='content-button'>
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="rent-feature-subscription">
                    <div className="subscription-text-content">
                        <div>
                            <h2>HOW IT WORKS</h2>
                            <h3>How to subscribe to our monthly rent payment package</h3>
                            <h4>Simple steps to subscribing with us</h4>
                        </div>
                        <div className="subscription-text-link">
                            <span>Ready to find your home?</span>
                            <div className="button">
                                <button>Get started now</button>
                            </div>
                        </div>
                    </div>
                    <div className="subscription-icons">
                        <ul className="icon-list">
                            {subscriptionData.map((data) => (
                                <li key={data.id}>
                                    <div className="icon">
                                        <span className={`mdi ${data.icon}`}></span>
                                    </div>
                                    <div className="icon-list-text">
                                        <h3>{data.title}</h3>
                                        <h4>{data.content}</h4>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="rent-feature-text">
                    <h2>Explore our apartments</h2>
                    <h3>Search from over 200+ verified listings</h3>
                </div>
                <div className="rent-explore">
                    <Link to='/verified-homes' className='explore-link'>
                        <div className="rent-explore-left">
                            <img src={rentImages.leftImage} alt=""/>
                            <div className="overlay"></div>
                            <div className="text">
                                <h3 className='large'>Verified Homes</h3>
                                <h4>216 homes</h4>
                            </div>
                        </div>    
                    </Link>
                    <div className="rent-explore-right">
                        <div className="rent-explore-right-top">
                            <Link to='/premium-homes' className='explore-link'>
                                <div className="top-left">
                                    <img src={rentImages.topLeftImage} alt=""/>
                                    <div className="text">
                                        <h3>Premium Homes</h3>
                                        <h4>10 homes</h4>
                                    </div>
                                    <div className="overlay"></div>
                                </div>    
                            </Link>
                            <Link to='/bedspaces' className='explore-link'>
                                <div className="top-right">
                                    <img src={rentImages.topRightImage} alt=""/>
                                    <div className="overlay"></div>
                                    <div className="text">
                                        <h3>Bedspaces</h3>
                                        <h4>10 bedspaces</h4>
                                    </div>
                                </div>     
                            </Link>
                        </div>
                        <Link to='/shared-homes' className='explore-link'>
                            <div className="rent-explore-right-bottom">
                                <img src={rentImages.bottomImage} alt=""/>
                                <div className="overlay"></div>
                                <div className="text">
                                    <h3>Shared Homes</h3>
                                    <h4>20 homes</h4>
                                </div>
                            </div>     
                        </Link>
                    </div>
                </div>
                <div className="rent-feature-text">
                    <h2>Find a neighbourhood near you</h2>
                    <h3>Enjoy quality living experience with proximity. It's closer than you think</h3>
                </div>
                <Tab/>
                <div className="rent-fun-facts">
                    <div className="rent-fun-facts-main-title">
                        <h2>We are proud of some of our numbers</h2>
                        <h3>In line with our goals of organizing the property rental market and providing affordable
                            housing, we make it a duty to celebrate every breakthrough.</h3>
                        <ul className="rent-fun-fact-list">
                            {rentFunFactData.map((data) => (
                                <li className="rent-fun-fact-item" key={data.id}>
                                    <h3><span className='mdi mdi-currency-ngn'></span>{data.title}</h3>
                                    <h4>{data.subtitle}</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <FAQ color='#378da9'/>
            </div>
        </div>
    </div>
  )
}

export default Rent;
