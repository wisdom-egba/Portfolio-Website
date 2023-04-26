import React from "react"
import { Link } from "react-router-dom"

import { BsShare, BsGithub, BsTwitter, BsDiscord } from "react-icons/bs"
import { BiMessage } from "react-icons/bi"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div>
      <Link>
        <a href="#">Home</a>
      </Link>
      <Link>
        <a href="#">About</a>
      </Link>
      <Link>
        <a href="#">Project</a>
      </Link>
      <Link>
        <a href="#">Contact</a>
      </Link>
      <div>
        <h1>Socials</h1>
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
          <BsGithub size={20} style={{ color: "gray" }} />
          <BsTwitter size={20} style={{ color: "gray" }} />
          <BsDiscord size={20} style={{ color: "gray" }} />
        </motion.div>
      </div>
    </div>
  )
}

export default Footer
