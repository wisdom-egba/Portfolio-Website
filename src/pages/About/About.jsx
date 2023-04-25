import React from "react"
import wisdom from "../../assets/RBWC-26.jpg"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className=" max-w-[360px] md:max-w-7xl mx-auto">
      <div>
        <img className="rounded-full w-[90px] h-[90px]" src={wisdom} alt="" />
        <h1 className="text-xl text-gray-400 py-2 tracking-wider">About Me</h1>
        <p className=" pFont2 text-lg leading-6 tracking-wider">
          Hello, my name is Wisdom, I'm a frontend developer passionate on
          collaborating with other developers to proffer solutions to real-life
          problems. I have a B.Eng degree in Mechanical Engineering.
        </p>
        <p className="pFont2 text-lg leading-6 tracking-wider">
          I have about two years experience using various frontend technologies.
          Oh yh, I also love gaming and playing musical instrument at my leisure
        </p>
        <h3>
          Some of the Frontend technologies I have worked with during the period
          are:
        </h3>
        <p>HTML, CSS, Javacript, React, Tailwind CSS, Framer-Motion</p>
      </div>
    </div>
  )
}

export default About
