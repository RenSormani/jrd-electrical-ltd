import React from 'react';
import './Footer.scss';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import icon from "../../images/Nic-EIC.png";
import icon2 from "../../images/TrustMark-logo.png";


const Footer = () => {
  return (
    <div className='footer-container'>
    <section className='footer-subscription'>
      <p className='footer-subscription-heading'>
        For any enquiries please don't hesitate to get in touch.
      </p>
      <p className='footer-subscription-text'>
        Either give us a call or click the button below to send us a message.
      </p>
      <div className='input-areas'>
          <Button buttonStyle='btn--outline'>CONTACT US</Button>
      </div>
    </section>
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>Office address</h2>
            <p>JRD Electrical Ltd</p>
            <p>154 stoke Lane</p>
            <p>Bristol</p>
            <p>BS9 3RN</p>
        </div>
        <div class='footer-link-items'>
          <h2>Contact details</h2>
          <p>MOBILE NUMBER</p>
            <p> 07831 644 244</p>
            <p>24-HR MOBILE</p>
            <p>07824 388 770 (24hr)</p>
        </div>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
        <h2>Email</h2>
        <a href="mailto:info@jrdelectrical.co.uk">info@</a>
        <a href="mailto:info@jrdelectrical.co.uk">jrdelectrical.co.uk</a>
        </div>
      </div>

      </div>
        <div class='footer-link-items'>
        <h2>About Us</h2>
          <Link to='/about'>Who we are</Link>
          <Link to='/contact'>Contact us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/trustmark'>TrustMark</Link>
        </div>
    </div>
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <a href='https://www.niceic.com/' className='social-logo'>
             <img src={icon} alt="NIC-icon" className='NIC'></img>
          </a>
        </div>
        <div class='footer-logo'>
          <a href='https://www.trustmark.org.uk/' className='social-logo'>
             <img src={icon2} alt="TrustMark-icon" className='Trust'></img>
          </a>
        </div>
        <small class='website-rights'>JRD Electrical © 2022</small>
        <small class='website-rights--privacy'><Link to='/privacy'>Privacy Policy</Link></small>
        <small class='website-rights--privacy'><Link to='/terms'>Terms and condition</Link></small>
      </div>
    </section>
  </div>
);
}


export default Footer