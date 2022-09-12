import React from 'react'
import './App.scss'
import Footer from './components/Footer/Footer';
import Links from './components/Links';
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './container/ScrollToTop/ScrollToTop';


const App = () => {
  return (
    <>
        <ScrollToTop />
          <Navbar />
          <Links />
          <Footer />
    </>
  )
}

export default App
