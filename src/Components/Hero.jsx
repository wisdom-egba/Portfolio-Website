import { delay } from "framer-motion"
import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import CircleBackground from "./CircleBackground"
import wisdom from "../assets/RBWC-26.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      `Hello there!, I'm Wisdom`,
      `A Tech Enthusiast`,
      `I'm a Frontend </Developer>`,
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 10,
  })

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-6">
      <CircleBackground />
      <img className="rounded-full w-[90px] h-[90px]" src={wisdom} alt="" />
      <h2 className="text-sm uppercase tracking-[15px] pb-2 text-gray-500">
        Software Engineer
      </h2>
      <div className="z-20">
        <h1 className="md:text-4xl lg:text-5xl font-semibold scroll-px-10">
          {text}
          <Cursor cursorColor="gray" />
        </h1>
        <div className="pt-5 mx-1">
          <Link to="/about">
            <button className="heroBtn">About</button>
          </Link>
          <Link to="/project">
            <button className="heroBtn">projects</button>
          </Link>
          <Link to="/contact">
            <button className="heroBtn">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
