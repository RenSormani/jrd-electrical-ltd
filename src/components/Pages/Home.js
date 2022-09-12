import React from 'react'
import Commercial from '../Commercial/Commercial'
import HeroSection from '../HeroSection/HeroSection'
import Residential from '../Residential/Residential'
import './Home.scss'

const Home = () => {
  return (
    <>
        <HeroSection />
        <div className="description">
          <p className="description-font">JRD Electrical employs only the best electricians and uses top quality 
          materials to elevate your needs to the next level.</p>
        </div>
        <Residential />
        <div className="description">
          <p className="description-font">Rewiring your home? No problem. Want some snazzy new lights installed? Ask our expert electricians for their illuminating advice...</p>
        </div>
        <Commercial />
        <div className="description">
          <p className="description-font">Commercial property needs electrical work? Fire alarm and smoke detectors need testing? Give us a bell and find out what else we can do for you...</p>
        </div> 
    </>
  )
}

export default Home