import React from 'react'
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  const socialMedia = ['mdi-twitter', 'mdi-instagram', 'mdi-linkedin', 'mdi-facebook', 'mdi-youtube'];
  const footerData = [
    {
      id: 1,
      title: 'Products',
      subtitles : ['Rent an Apartment', 'Buy an Apartment', 'Invest in an Apartment']
    },
    {
      id: 2,
      title: 'Company',
      subtitles : ['About Us', 'Blog', 'Careers']
    },
    {
      id: 3,
      title: 'Legal',
      subtitles : ['Privacy Policy', 'Terms and Conditions', 'FAQ']
    },
    {
      id: 4,
      title: 'Contact Us',
      subtitles : ['Talk to Us', 'nomeorealtors@gmail.com', '+2347037575894']
    }
  ];
  return (
    <div className="main-footer">
      <div className="container">
        <div className="footer-left">
          <div className="brand-name">
            <Link to='/'>Nomeo Realtors</Link>
          </div>
          <ul className="social-icons">
            {socialMedia.map((icon, index) => (
              <li key={index}>
                <a href="#!"><span className={`mdi ${icon}`}></span></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-right-top">
            {footerData.map((data) => (
              <div key={data.id}>
                <h2>{data.title}</h2>
                <ul className="footer-links">
                  {data.subtitles.map((subtitle, index) => (
                    <li key={index}><a href="#!">{subtitle}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-right-bottom">
            &copy; {new Date().getFullYear()} nomeo-concepts
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
