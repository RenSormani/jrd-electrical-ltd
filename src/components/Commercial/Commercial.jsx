import React from 'react'
import { Button } from '../Button/Button'
import './Commercial.scss'

const Commercial = () => {
  return (
<div className="commercial-container">
      <h1>Commercial</h1>
      <div className='hero-text'>
      <p>Electrics for your workspace</p>
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
    </div>  )
}

export default Commercial