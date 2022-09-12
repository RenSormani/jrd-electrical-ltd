import React from 'react';
import { Button } from '../Button/Button';
import "./Residential.scss";

const Residential = () => {
  return (
<div className="residential-container">
      <h1>Residential</h1>
      <p>Light up your homes...</p>
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
  )
}


export default Residential