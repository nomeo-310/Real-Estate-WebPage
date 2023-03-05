import React from 'react';

const BuySingle = ({buyHouse: {image, name, type, status, down_payment, apartment_status, price, rent, returns, appreciation, apartment_details}}) => {
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
                <h4>Down Payment</h4>
                <h3><span className='mdi mdi-currency-ngn'></span>{down_payment.toLocaleString()}</h3>
            </div>
            <div className={apartment_status === 'available' ? 'apartment-status available' : 'apartment-status'}>
                <h4>{apartment_status}</h4>
            </div>
        </div>
        <h3 className='property-price'>Property Price: <span><span className="mdi mdi-currency-ngn"></span>{price.toLocaleString()}</span></h3>
        <h3 className='apartment-name'>{name}</h3>
        <ul className='apartment-details'>{apartment_details.map((detail, index) => (<li key={index}>{detail}</li>))}</ul>
        <ul className='footer'>
            <li>Rent Per Annum: <span><span className='mdi mdi-currency-ngn'></span>{rent}</span></li>
            <li>Annual Returns: <span>{returns}%</span></li>
            <li>Appreciation: <span>{appreciation}%</span></li>
        </ul>
      </div>
    </div>
  );
}

export default BuySingle;
