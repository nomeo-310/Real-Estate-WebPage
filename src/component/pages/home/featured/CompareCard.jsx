import React from 'react'

const CompareCard = ({cardDetail: {name, list_item}}) => {
  return (
    <div className='compare-card'>
      <h3 className="title">{name}</h3>
      <ul className="card-list">
        {list_item.map((item, index) => (
            <li key={index}>
                <h4>{item.heading}</h4>
                <h4>{item.info}</h4>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default CompareCard;
