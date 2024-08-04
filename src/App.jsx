import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import './App.css'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'
import { Toaster } from 'react-hot-toast'
import Projects from './Components/Projects'



const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
        <Footer />
      </div>
      <Toaster />
    </>
  )
}

export default App
