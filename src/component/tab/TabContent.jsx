import React from 'react'

const TabContent = ({data}) => {
  return (
    <div className='tab-content'>
      <ul className="tab-list">
        {data.map((singleData, index) => (<li className="tab-list-item" key={index}>{singleData}</li>))}
      </ul>
    </div>
  )
}

export default TabContent;
