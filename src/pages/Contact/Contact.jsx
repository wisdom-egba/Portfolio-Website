import React from "react"
import { BsGithub, BsTwitter, BsDiscord, BsLinkedin } from "react-icons/bs"

const Contact = () => {
  return (
    <div
      className="relative z-10 w-full"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-55 transition-opacity h-screen"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-[rgb(36,36,36)] px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-white animate-bounce"
                    id="modal-title "
                  >
                    Reach Out!!
                  </h3>
                  <div className="mt-2">
                    <p className=" text-white pFont text-xl leading-6 tracking-wider font-thin">
                      Are you interested in Frontend developer to build amazing
                      projects with sleek UI? then hit the button below. You can
                      also get in touch with me for freelancing, part-time and
                      junior dev roles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[rgb(36,36,36)] px-4 py-3 sm:flex sm:flex-col sm:px-6">
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-full border-[#F7AB0A] border px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#F7AB0A] sm:ml-3 sm:w-auto"
              >
                Send Email
              </a>
              <div className="flex  flex-col justify-center items-center gap-3 mt-4 text-black">
                <a
                  href="https://github.com/wisdom-egba"
                  className="flex gap-3 heroBtn"
                >
                  <BsGithub size={20} style={{ color: "black" }} /> Github
                </a>
                <a
                  href="https://twitter.com/_wisdom34"
                  className="flex gap-3 heroBtn"
                >
                  <BsTwitter size={20} style={{ color: "#3d7cc9" }} /> Twitter
                </a>
                {/* <a href="" className="flex gap-3 heroBtn">
                  <BsDiscord size={20} style={{ color: "#3c4ae3" }} /> Discord
                </a> */}
                <a
                  href="https://www.linkedin.com/in/egba-wisdom/"
                  className="flex gap-3 heroBtn"
                >
                  <BsLinkedin size={20} style={{ color: "#3d7cc9" }} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
