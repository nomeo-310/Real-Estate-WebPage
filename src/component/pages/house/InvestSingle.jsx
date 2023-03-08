import React from 'react'
import './style.scss'

const InvestSingle = ({investHouse: {image, name, type, status, share_price, purchase_status, price, hold_time, total_returns, available_shares, remaining_shares, apartment_details}}) => {
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
                <h4>Starting price</h4>
                <h3><span className='mdi mdi-currency-ngn'></span>{share_price.toLocaleString()}/<span>share</span></h3>
            </div>
            <div className={purchase_status === 'buy' ? 'apartment-status buy' : 'apartment-status'}>
                <h4>{purchase_status}</h4>
            </div>
        </div>
        <div className="shares">
            <div>
              <h3>Shares available</h3>
              <span>{available_shares.toLocaleString()}</span>
            </div>
            <div>
                <h3>Shares remaining</h3>
                <span>{remaining_shares.toLocaleString()}</span>
            </div>
        </div>
        <h3 className='property-price'>Property Price: <span><span className="mdi mdi-currency-ngn"></span>{price.toLocaleString()}</span></h3>
        <h3 className='apartment-name'>{name}</h3>
        <ul className='apartment-details'>{apartment_details.map((detail, index) => (<li key={index}>{detail}</li>))}</ul>
        <ul className='footer'>
            <li>Hold Period: <span>{hold_time}years</span></li>
            <li>Returns: <span>{total_returns}%</span></li>
        </ul>
      </div>
    </div>
  )
}

export default InvestSingle;
