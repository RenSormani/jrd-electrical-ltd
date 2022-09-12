import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home/Home';
import Contact from './components/Pages/Contact/Contact';
import About from './components/Pages/About/About';
import TrustMark from './components/Pages/TrustMark/TrustMark';
import Service from './components/Pages/Service/Service';
import Privacy from './components/Pages/Privacy/Privacy';
import Terms from './components/Pages/Terms/Terms';
import ScrollToTop from './container/ScrollToTop/ScrollToTop';


const App = () => {
  return (
      <Router>
        <ScrollToTop />
          <Navbar />
            <Routes>
              <Route exact path='/jrd-electrical-ltd/' element={<Home />} />
              <Route path='/services' element={<Service />} />
              <Route path='/trustmark' element={<TrustMark />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/terms' element={<Terms />} />
            </Routes>
          <Footer />
      </Router>
  )
}

export default App
