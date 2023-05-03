import React from "react"
import CurrentDate from "./CurrentDate"
import wisdom from "../assets/RBWC-26.jpg"
import { BsArrowLeft } from "react-icons/bs"
import { easeOut, motion } from "framer-motion"
import { Link } from "react-router-dom"

const CompHeader = ({ toggleMode }) => {
  return (
    <div className="flex justify-between items-start p-3 ml-5 md:ml-24 lg:ml-[30%]">
      <motion.div
        initial={{
          opacity: 0.1,
          scale: 0.5,
        }}
        animate={{
          x: [0, 50, 50, 0],
          opacity: 1,
          scale: 1,
        }}
        transition={{
          bounce: Infinity,
          duration: 5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className="animate-pulse lg:hidden">
          <BsArrowLeft size={40} style={{ color: "#F7AB0A" }} />
        </Link>
      </motion.div>

      <CurrentDate toggleMode={toggleMode} />
    </div>
  )
}

export default CompHeader
