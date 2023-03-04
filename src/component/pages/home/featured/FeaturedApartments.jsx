import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedApartments = ({featureApartment: {title, link, subtitle}, children}) => {
  return (
    <div className='featured-apartments'>
      <div className="top">
        <h2>{title}</h2>
        <Link to={`/${link}`}>Explore All</Link>
      </div>
      <p>{subtitle}</p>
      <div className="bottom">
        {children}
      </div>
    </div>
  );
}

export default FeaturedApartments;
