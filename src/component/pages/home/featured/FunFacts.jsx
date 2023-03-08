import React from 'react'

const FunFacts = () => {
    const funFactData = [
        {
            id: 1,
            title: '15M+',
            subtitle: 'Average amount saved on market value of properties'
        },
        {
            id: 2,
            title: '98+',
            subtitle: 'Properties funded'
        },
        {
            id: 3,
            title: '3.2Bn+',
            subtitle: 'Property value funded'
        },
        {
            id: 4,
            title: '20,000+',
            subtitle: 'Co-ownership shares'
        },

    ]
  return (
    <div className='fun-facts'>
      <h2 className='title'>It's your turn, don't miss out!</h2>
      <ul className="fun-fact-list">
        {funFactData.map((funFact) => (
            <li className="fun-fact" key={funFact.id}>
                <h2><span className='mdi mdi-currency-ngn'></span>{funFact.title}</h2>
                <h4>{funFact.subtitle}</h4>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default FunFacts;
