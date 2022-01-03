import { useState } from 'react'
import './index.css'
import {Hero , Footer , Loader, NavBar} from './components';

function App() {
  
  return (
    <div className="min-h-screen">
      <div className="">
        <NavBar/>
        <Hero/>
      </div>
        <Loader/>
        <Footer/>
    </div>
  )
}

export default App
