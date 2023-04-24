import { delay } from "framer-motion"
import React from "react"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import CircleBackground from "./CircleBackground"

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
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-24">
      <CircleBackground />
      <h1>
        {text}
        <Cursor cursorColor="red" />
      </h1>
    </div>
  )
}

export default Hero
