import React from 'react'
import { Link } from 'react-router-dom';

const FAQ = ({color}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Link to='/frequently-asked-questions' style={{padding: `15px 45px`, fontSize: `20px`, textDecoration: 'none', borderRadius: `30px`, color: `#fff`, backgroundColor: `${color}`, }}>See FAQ</Link>
    </div>
  )
}

export default FAQ;
