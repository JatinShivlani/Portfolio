import React from 'react'
import {Hero,Navbar,About,Tech,Experience,Works,Contact,StarsCanvas} from './components/index.js'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-gammaGreen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-centre bg-dark">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
