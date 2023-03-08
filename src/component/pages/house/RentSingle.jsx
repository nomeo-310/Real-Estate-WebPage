import React from 'react';
import './style.scss'

const RentSingle = ({rentHouse: {image, name, type, status, rent, apartment_status, apartment_details}}) => {
  return (
    <div className='single-house'>
      <div className="image">
        <img src={image} alt={name}/>
      </div>
      <div className="status">
        <span>{type}</span>
        <span>{status}</span>
      </div>
      <div className="house-details">
        <div className="payment_status">
            <div className="payment">
              <h4>Annual Rent</h4>
              <h3><span className='mdi mdi-currency-ngn'></span>{rent.toLocaleString()}</h3>
            </div>
            <div className={apartment_status === 'available' ? 'apartment-status available' : 'apartment-status'}>
              <h4>{apartment_status}</h4>
            </div>
        </div>
        <h3 className='apartment-name'>{name}</h3>
        <ul className='apartment-details'>{apartment_details.map((detail, index) => (<li key={index}>{detail}</li>))}</ul>
      </div>
    </div>
  )
}

export default RentSingle;
