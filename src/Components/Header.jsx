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
import { Link } from "react-router-dom"

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
        className="flex gap-6"
      >
        <a href="https://github.com/wisdom-egba">
          <BsGithub size={25} style={{ color: "gray" }} />
        </a>
        <a href="https://twitter.com/_wisdom34">
          <BsTwitter size={25} style={{ color: "gray" }} />
        </a>
        <a href="https://www.linkedin.com/in/egba-wisdom/">
          <BsLinkedin size={25} style={{ color: "gray" }} />
        </a>
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
        className=""
      >
        <Link
          className="flex items-center justify-center cursor-pointer gap-3"
          to="/contact-me"
        >
          <BiMessage size={25} style={{ color: "gray" }} />
          <a
            href="#"
            className="hidden md:inline-flex text-sm text-gray-400 animate-bounce"
          >
            GET IN TOUCH
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default Header
