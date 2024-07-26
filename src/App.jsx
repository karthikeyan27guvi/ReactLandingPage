import React from 'react'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Navbar from './Components/Navbar'
import Masthead from './Components/Masthead'
import Testimonials from './Components/Testimonials'
import Features from './Components/Features'
import CallToAction from './Components/CallToAction'
import Footer from './Components/Footer'
import Showcase from './Components/Showcase.jsx'

function App() {
  return (
   <div>
    <Navbar/>
    <Masthead/>
    <Features/>
    <Showcase/>
    <Testimonials/>
    <CallToAction/>
    <Footer/>
   </div>
  )
}

export default App
