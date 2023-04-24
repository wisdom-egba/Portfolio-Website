import { motion } from "framer-motion"
import React from "react"

const CircleBackground = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0.5, 0.6, 0.5, 1, 0.3],
        scale: [1, 2, 2, 2, 1],
        borderRadius: ["20%", "20%", "60%", "90%", "30%"],
      }}
      transition={{
        duration: 2,
      }}
      className="relative flex justify-center items-center"
    >
      <div className=" absolute border border-[#333333] rounded-full h-[200px] md:h-[400px] w-[200px] md:w-[400px] mt-52 animate-ping " />
      <div className=" absolute border border-[#333333] rounded-full h-[150px] md:h-[300px] w-[150px] md:w-[300px] mt-52 animate-pulse " />
      <div className=" absolute border-[white] border-1 rounded-full h-[180px] md:h-[200px] w-[180px] md:w-[200px] mt-52  animate-pulse " />
      <div className=" absolute border border-[#333333] rounded-full h-[330px] md:h-[400px] w-[330px] md:w-[400px] mt-52 " />
      <div />
    </motion.div>
  )
}

export default CircleBackground
