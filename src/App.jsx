import React from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Hero />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
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
