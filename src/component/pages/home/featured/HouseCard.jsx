import React from 'react';
import { Link } from 'react-router-dom';

const HouseCard = ({house: {image, title, link}}) => {
  return (
    <div className='house-card'>
      <div className="house-image">
        <img src={image} alt=""/>
      </div>
      <div className="card-details">
        <h3 className="title">{title}</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis reiciendis odit ab. Eaque temporibus voluptatum distinctio officia aperiam, et, magni dolor, ea quisquam at non?</p>
        <Link to={`${link}`}>Learn More</Link>
      </div>
      
    </div>
  );
}

export default HouseCard;
