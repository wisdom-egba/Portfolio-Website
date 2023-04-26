import React from "react"
import { FiFacebook } from "react-icons/fi"
import {
  BsShare,
  BsGithub,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
} from "react-icons/bs"
import { BiMessage } from "react-icons/bi"
import { motion } from "framer-motion"
const Header = () => {
  return (
    <div className="sticky flex items-start xl:items-center justify-between max-w-7xl m-auto p-5">
      <motion.div
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.7,
        }}
        className="flex gap-4"
      >
        <FiFacebook size={20} style={{ color: "gray" }} />
        <BsShare size={20} style={{ color: "gray" }} />
        <BsGithub size={20} style={{ color: "gray" }} />
        <BsTwitter size={20} style={{ color: "gray" }} />
        <BsDiscord size={20} style={{ color: "gray" }} />
        <BsLinkedin size={20} style={{ color: "gray" }} />
      </motion.div>
      <motion.div
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: 0.9,
        }}
        className="flex items-center justify-center cursor-pointer gap-3"
      >
        <BiMessage size={25} style={{ color: "gray" }} />
        <h1 className="hidden md:inline-flex text-sm text-gray-400 animate-bounce">
          GET IN TOUCH
        </h1>
      </motion.div>
    </div>
  )
}

export default Header
