import React from 'react'
import Home from '../../components/Pages/Home';
import Contact from '../../components/Pages/Contact/Contact';
import About from '../../components/Pages/About';
import TrustMark from '../../components/Pages/TrustMark/TrustMark';
import Service from '../../components/Pages/Service/Service';
import Privacy from '../../components/Pages/Privacy/Privacy';
import Terms from '../../components/Pages/Terms/Terms';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Links = () => {
  return (
    <Routes>
              <Route path='/jrd-electrical-ltd/' element={<Home />} />
              <Route path='/services' element={<Service />} />
              <Route path='/trustmark' element={<TrustMark />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
    </Routes>
  )
}

export default Links