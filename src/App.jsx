import { useState } from 'react'
import './index.css'
import {Hero , Footer , Loader, NavBar, About, Projects, Domains, Events, Team} from './components';

function App() {
  
  return (
    <div className="min-h-screen hackaruto-body">
      <div className="">
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
        <Domains/>
        <Events/>
        <Team/>
      </div>
        <Loader/>
        <Footer/>
    </div>
  )
}

export default App
