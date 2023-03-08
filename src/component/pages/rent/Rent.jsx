import React from 'react'
import './rent.scss'
import PageHeader from '../../page-header/PageHeader'
import rentBanner from '../../images/rentBanner.jpg'

const Rent = () => {
    const rentData = {
        main_title: 'Do you want to pay your rent monthly?',
        sub_title: 'Renting does not have to be hard, enjoy the ease that comes with monthly plan'
    }
  return (
    <div className='rent'>
      <PageHeader 
        showSearch={true} 
        image={rentBanner}
        main_title={rentData.main_title}
        sub_title={rentData.sub_title} 
        />
    </div>
  )
}

export default Rent;
