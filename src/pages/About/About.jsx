import React from "react"
import wisdom from "../../assets/RBWC-26.jpg"
import { motion } from "framer-motion"
import { duration } from "moment/moment"

const About = () => {
  return (
    <div className=" max-w-[360px] md:max-w-[80%] mx-auto lg:w-[40%]">
      <div>
        <motion.img
          initial={{
            y: -250,
            opacity: 0.5,
          }}
          animate={{
            y: 0,
            rotate: 360,
            opacity: 1,
          }}
          transition={{
            rotateX: 360,
            duration: 1.3,
            opacity: 0.1,
            delay: 0.5,
          }}
          className="rounded-full w-[90px] h-[90px]"
          src={wisdom}
          alt=""
        />
        <motion.h1
          initial={{
            x: -50,
            opacity: 0.3,
            scale: 0.2,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="text-xl font-bold text-gray-400 py-2 tracking-wider"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{
            y: -100,
            opacity: 0.2,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="py-3 md:py-5"
        >
          <p className=" pFont2 text-lg leading-6 tracking-wider font-thin">
            Hello, my name is Wisdom, I'm a frontend developer passionate on
            collaborating with other developers to proffer solutions to
            real-life problems. I have a B.Eng degree in Mechanical Engineering.
          </p>
          <p className="pFont2 text-lg leading-6 tracking-wider font-thin">
            I have about two years experience using various frontend
            technologies. Oh yh, I also love gaming and playing musical
            instrument at my leisure
          </p>
        </motion.div>

        <motion.h3
          initial={{
            y: 100,
            opacity: 0.2,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="pFont2 text-lg"
        >
          Some of the Frontend technologies I have worked with during the period
          are:
        </motion.h3>
        <p className="pFont text-[18px] md:text-lg lg:text-2xl py-2 tracking-[3px] font-semibold ">
          HTML, CSS, Javacript, React, Tailwind CSS, Framer-Motion
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default About
