import React from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import CompHeader from "./Components/CompHeader"

import GetInTouch from "./pages/GetInTouch/GetInTouch"

function App() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
        <Router>
          <Routes>
            <Route
              path="/about"
              element={
                <div>
                  <CompHeader />
                  <About />
                </div>
              }
            />
            <Route
              path="/project"
              element={
                <div>
                  <CompHeader />
                  <Projects />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <CompHeader />
                  <Contact />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div>
                  <Header />
                  <Hero />
                </div>
              }
            />
            <Route path="/contact-me" element={<GetInTouch />} />
          </Routes>
        </Router>
      </div>
    </>
  )

  {
    /* Header*/
  }

  // Hero

  // About

  // Experience

  // Skill

  // Projects

  // ContactMe
}
export default App
