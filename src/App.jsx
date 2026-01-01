import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
        <Navbar />
        <Hero />
        <Skills/>
        <Projects />
        <About />
         <Contact />
        <Footer /> 
    </>
  )
}

export default App
