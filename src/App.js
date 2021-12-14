import React from 'react'
import Navbar from './Component/Navbar'
import "tailwindcss/tailwind.css"
import IntroSection from './Component/IntroSection'
import About from './Component/About'
import Project from './Component/Project'
import Interest from "./Component/Interest"
import Getintouch from './Component/Getintouch'
import Linfo from './Component/Linfo'
import Rinfo from './Component/Rinfo'

export default function App() {
  return (
    <div className="relative bg-primary">
      <Navbar/>
      <IntroSection/>
      <About/>
      <Project/>
      <Interest/>
      <Getintouch/>
      <div className="fixed bottom-2 ">
          <Linfo/>
      </div>
      <div className="fixed bottom-2 right-0">
          <Rinfo/>
      </div>

    </div>
  )
}
