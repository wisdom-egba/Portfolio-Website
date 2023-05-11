import React, { useState } from "react"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import CompHeader from "./Components/CompHeader"

import GetInTouch from "./pages/GetInTouch/GetInTouch"

function App() {
  const [toggleMode, setToggleMode] = useState(false)

  return (
    <>
      <div
        className={
          toggleMode
            ? "bg-[#F7EFE5] text-black h-screen snap-y snap-mandatory overflow-scroll overflow-y-scroll scrollbar scrollbar-track-gray-300 scrollbar-thumb-orange-300 scrollbar-thin"
            : "bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll scrollbar scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-orange-400"
        }
      >
        <div className="absolute right-16 top-5 md:right-[200px]"></div>
        <Router>
          <Routes>
            <Route
              path="/about"
              element={
                <div>
                  <CompHeader toggleMode={toggleMode} />
                  <About toggleMode={toggleMode} />
                </div>
              }
            />
            <Route
              path="/project"
              element={
                <div>
                  <CompHeader toggleMode={toggleMode} />
                  <Projects toggleMode={toggleMode} />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <Contact toggleMode={toggleMode} />
                </div>
              }
            />
            <Route
              path="/"
              element={
                <div>
                  <Header
                    toggleMode={toggleMode}
                    setToggleMode={setToggleMode}
                  />
                  <Hero toggleMode={toggleMode} />
                </div>
              }
            />
            <Route
              path="/contact-me"
              element={<GetInTouch toggleMode={toggleMode} />}
            />
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
