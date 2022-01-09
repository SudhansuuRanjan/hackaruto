import { useState } from 'react'
import './index.css'
import {Hero , Footer , Loader, NavBar, About, Projects, Domains, Events, Team, Contact} from './components';

function App() {
  
  return (
    <div className="min-h-screen hackaruto-body">
      <div className="">
        <Loader/>
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Domains/>
        <Events/>
        <Team/>
        <Contact/>
      </div>
        
        <Footer/>
    </div>
  )
}

export default App
