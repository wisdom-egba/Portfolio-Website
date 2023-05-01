import React from "react"
import logo1 from "../../assets/umba-shot (2).jpg"
const Projects = () => {
  const projects = [1, 2, 3, 4]
  return (
    <div className="relative overflow-hidden flex-col max-w-full flex items-center justify-center space-y-9 mx-auto">
      <h3 className="relative  tracking-[15px] uppercase">Projects</h3>

      <div className="relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => {
          return (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center">
              <img className=" w-[40%]" src={logo1} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
