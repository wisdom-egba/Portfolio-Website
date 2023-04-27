import React from "react"

const Projects = ({ toggleMode, setToggleMode }) => {
  console.log(toggleMode)
  return (
    <div
      onClick={() => setToggleMode(!toggleMode)}
      className="flex items-center justify-center"
    >
      <h3 className="absolute top-[20%] tracking-[15px] uppercase">Projects</h3>
    </div>
  )
}

export default Projects
