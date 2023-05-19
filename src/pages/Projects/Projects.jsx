import { projectData } from "./projectData"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
 

 

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
      </div>
    </div>
  )
}

export default Projects
