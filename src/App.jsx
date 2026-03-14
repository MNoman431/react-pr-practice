import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import OurStory from './pages/OurStory'
import AboutUs from './pages/AboutUs'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
