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

const Header = ({ toggleMode, setToggleMode }) => {
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
      <div className="flex items-center gap-3">
        <motion.input
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          onClick={() => setToggleMode(!toggleMode)}
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          for="flexSwitchCheckDefault"
        ></label>
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
    </div>
  )
}

export default Header
