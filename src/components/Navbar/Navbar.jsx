import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.scss';
import icon from "../../images/power.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='complete-logo'>
              <div className='logo-container'>
                <div className='logo-top'>JRD</div>
                <div className='logo-bottom'>Electrical</div>
              </div>
             <img src={icon} alt="JRD-icon" className='lightning'></img>
             </div>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  SERVICES
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/trustmark'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  TRUSTMARK
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT US
                </Link>
              </li>
  
              <li>
                <Link
                  to='/contact'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>CONTACT US</Button>}
          </div>
        </nav>
      </>
    );
  }
  

export default Navbar