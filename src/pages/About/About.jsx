import React from "react"
import wisdom from "../../assets/RBWC-26.jpg"
import { motion } from "framer-motion"
import { duration } from "moment/moment"
import {
  BsShare,
  BsGithub,
  BsTwitter,
  BsDiscord,
  BsLinkedin,
} from "react-icons/bs"

const About = ({ toggleMode }) => {
  return (
    <div className=" max-w-[355px] md:max-w-[80%] mx-auto lg:w-[40%]">
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
          className={
            toggleMode
              ? "text-xl font-bold text-black py-2 tracking-wider"
              : "text-xl font-bold text-gray-400 py-2 tracking-wider"
          }
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
          <p
            className={
              toggleMode
                ? " pFont2 text-lg font-semibold lg:text-[25px] lg:leading-8 leading-6 tracking-wider"
                : " pFont2 text-lg  lg:text-[25px] lg:leading-8 leading-6 tracking-wider font-thin"
            }
          >
            Hello, my name is Wisdom, I'm a frontend developer passionate on
            collaborating with other developers to proffer solutions to
            real-life problems. I have a B.Eng degree in Mechanical Engineering.
          </p>
          <p
            className={
              toggleMode
                ? "pFont2 text-lg pt-2 lg:pt-4 lg:text-[25px] lg:leading-8 leading-6 tracking-wider font-semibold"
                : "pFont2 text-lg pt-2 lg:pt-4 lg:text-[25px] lg:leading-8 leading-6 tracking-wider font-thin"
            }
          >
            I have about two years experience using various frontend
            technologies. Oh yh, I also love gaming and playing musical
            instrument at leisure
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
          className={
            toggleMode
              ? "pFont2 text-lg lg:text-[25px] font-semibold"
              : "pFont2 text-lg lg:text-[25px]"
          }
        >
          Some of the Frontend technologies I have worked with during this
          period are:
        </motion.h3>
        <p className="pFont text-[18px] md:text-lg lg:text-2xl py-2 tracking-[3px] font-semibold ">
          HTML, CSS, Javacript, React, Tailwind CSS, Framer-Motion
        </p>
      </div>
      <div className="flex flex-col pt-4  ">
        <h1 className="md:text-xl">Socials</h1>
        <div className="md:flex gap-8 py-2">
          <a
            href="https://github.com/wisdom-egba"
            className="flex gap-2 my-1 md:my-3 hover:text-[#F7AB0A]"
          >
            <BsGithub size={25} style={{ color: "gray" }} /> @wisdom-egba
          </a>
          <a
            href="https://twitter.com/_wisdom34"
            className="flex gap-2 my-3 hover:text-[#F7AB0A]"
          >
            <BsTwitter size={25} style={{ color: "gray" }} />
            @_wisdom34
          </a>
          <a
            href="https://www.linkedin.com/in/egba-wisdom/"
            className="flex gap-2 my-3 hover:text-[#F7AB0A]"
          >
            <BsLinkedin size={25} style={{ color: "gray" }} /> @egba-wisdom
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
