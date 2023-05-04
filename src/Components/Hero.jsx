import { motion, delay } from "framer-motion"
import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import CircleBackground from "./CircleBackground"
import wisdom from "../assets/RBWC-26.jpg"
import { Link } from "react-router-dom"

const Hero = ({ toggleMode }) => {
  const [text] = useTypewriter({
    words: [
      `Hello there!, I'm Wisdom`,
      `A Tech Enthusiast`,
      `I'm a Frontend <Developer />`,
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 10,
    delay: 3,
  })

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-6">
      <CircleBackground />
      <motion.img
        initial={{
          scale: 3,
        }}
        animate={{
          rotate: 360,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="rounded-full w-[90px] h-[90px]"
        src={wisdom}
        alt=""
      />
      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.5,
        }}
        viewport={{ once: true }}
        className="text-sm md:text-lg uppercase tracking-[15px] pb-2 text-gray-500"
      >
        Software Engineer
      </motion.h2>
      <div className="z-20">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold scroll-px-10">
          {text}
          <Cursor cursorColor="gray" />
        </h1>
        <div className="pt-5 mx-1">
          <Link to="/about">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              About
            </button>
          </Link>
          <Link to="/project">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              projects
            </button>
          </Link>
          <Link to="/contact">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
