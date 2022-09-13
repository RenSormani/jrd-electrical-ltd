import React from 'react'
import '../../App.scss'
import { Button } from '../Button/Button'
import './HeroSection.scss'
 
const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>JRD ELECTRICAL</h1>
      <div className='hero-text'>
      <p>Shockingly good electricians since 1991</p>
      </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET A QUOTE
        </Button>
      </div>
    </div>
  );
}

export default HeroSection
