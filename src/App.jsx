import { useState } from 'react'
import './index.css'
import {Hero , Footer , Loader, NavBar, About, Projects} from './components';

function App() {
  
  return (
    <div className="min-h-screen hackaruto-body">
      <div className="">
        <NavBar/>
        <Hero/>
        <About/>
        <Projects/>
      </div>
        <Loader/>
        <Footer/>
    </div>
  )
}

export default App
