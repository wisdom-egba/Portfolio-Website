import React from "react"
import { projectData } from "./projectData"
const Projects = ({ toggleMode }) => {
  return (
    <div className="relative overflow-hidden flex-col max-w-full flex items-center justify-center space-y-9 mx-auto z-20">
      <h3 className="relative  tracking-[15px] uppercase py-4">Projects</h3>

      <div
        className={
          toggleMode
            ? "relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#F7EFE5] scrollbar-thin scrollbar-thumb-orange-400 outline-none"
            : "relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[rgb(36,36,36)] scrollbar-thin scrollbar-thumb-orange-400 outline-none"
        }
      >
        {projectData.map((project) => {
          const { id, title, description, img } = project
          return (
            <div
              key={id}
              className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center z-10 "
            >
              <div className="snap-center flex items-center justify-center filter ">
                <img
                  className=" md:w-[40%] lg:w-[30%] rounded-xl drop-shadow-lg shadow-xl hover:grayscale "
                  src={img}
                  alt=""
                />
                <div className="absolute text-black flex gap-3 w-full justify-center mt-40 z-30">
                  <button className="p-2 rounded-full border">
                    Source Code
                  </button>
                  <button className="p-2 rounded-full border hover:text-[#F7AB0A]">
                    Demo-Link
                  </button>
                </div>
              </div>

              <div className="font-semibold py-8">
                <h1 className="text-red">{title}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
