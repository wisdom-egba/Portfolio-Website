import React from "react"
import { BsGithub, BsTwitter, BsDiscord, BsLinkedin } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import wisdom from "../../assets/RBWC-26.jpg"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
const GetInTouch = ({ toggleMode }) => {
  return (
    <div
      className="relative z-10 w-full shadow-lg outline-none"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-400 bg-opacity-[35%] transition-opacity h-screen"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div
              className={
                toggleMode
                  ? " bg-[#F7EFE5] px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                  : "bg-[rgb(36,36,36)] px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
              }
            >
              <div className="sm:flex sm:items-start">
                <div class="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-400 sm:mx-0 sm:h-10 sm:w-10">
                  <img
                    className="rounded-full h-full w-full"
                    src={wisdom}
                    alt=""
                  />
                </div>

                <div
                  className={
                    toggleMode
                      ? "mt-3 text-center text-black font-semibold sm:ml-4 sm:mt-0 sm:text-left "
                      : "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left "
                  }
                >
                  <h3
                    className="text-base font-semibold leading-6 md:text-lg  animate-bounce"
                    id="modal-title "
                  >
                    Reach Out!!
                  </h3>
                  <Link
                    to="/"
                    className="absolute top-0 right-0 p-4 animate-pulse"
                  >
                    <AiOutlineClose size={35} style={{ color: "#F7AB0A" }} />
                  </Link>
                  <div className="mt-2">
                    <p className=" pFont text-xl leading-6 tracking-wider">
                      Are you interested in Frontend developer to build amazing
                      projects with sleek UI? then hit the button below. You can
                      also get in touch with me for freelancing, part-time and
                      junior dev roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleMode
                  ? "bg-[#F7EFE5]  px-4 py-3 sm:flex sm:flex-col sm:px-6"
                  : "bg-[rgb(36,36,36)] px-4 py-3 sm:flex sm:flex-col sm:px-6"
              }
            >
              <a
                href="mailto: egbawisdom34@gmail.com"
                className={
                  toggleMode
                    ? "inline-flex w-full justify-center rounded-full border-[#F7AB0A] border px-3 py-3 text-sm font-semibold text-black shadow-sm hover:bg-[#F7AB0A] hover:text-white sm:ml-3 sm:w-auto"
                    : "inline-flex w-full justify-center rounded-full border-[#F7AB0A] border px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#F7AB0A] sm:ml-3 sm:w-auto"
                }
              >
                Send Email
              </a>
              <motion.div
                initial={{
                  opacity: 0.2,
                  x: -20,
                  scale: 0.4,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                }}
                className="flex  flex-col justify-center items-center gap-3 mt-4 text-black"
              >
                <a
                  href="https://github.com/wisdom-egba"
                  className={
                    toggleMode ? "flex gap-3 heroBtn2" : "flex gap-3 heroBtn"
                  }
                >
                  <BsGithub size={20} style={{ color: "black" }} /> Github
                </a>
                <a
                  href="https://twitter.com/_wisdom34"
                  className={
                    toggleMode ? "flex gap-3 heroBtn2" : "flex gap-3 heroBtn"
                  }
                >
                  <BsTwitter size={20} style={{ color: "#3d7cc9" }} /> Twitter
                </a>
                {/* <a href="" className="flex gap-3 heroBtn">
                  <BsDiscord size={20} style={{ color: "#3c4ae3" }} /> Discord
                </a> */}
                <a
                  href="https://www.linkedin.com/in/egba-wisdom/"
                  className={
                    toggleMode ? "flex gap-3 heroBtn2" : "flex gap-3 heroBtn"
                  }
                >
                  <BsLinkedin size={20} style={{ color: "#3d7cc9" }} /> LinkedIn
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
