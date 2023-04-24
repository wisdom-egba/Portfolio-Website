import React from "react"
import { FiFacebook } from "react-icons/fi"
import { BsShare, BsGithub, BsTwitter, BsDiscord } from "react-icons/bs"
import { BiMessage } from "react-icons/bi"
const Header = () => {
  return (
    <div className="flex justify-between mt-6 mx-5 ">
      <div className="flex">
        <FiFacebook />
        <BsShare />
        <BsGithub />
        <BsTwitter />
        <BsDiscord />
      </div>
      <div className="flex items-center justify-center">
        <BiMessage />
        <h1>GET IN TOUCH</h1>
      </div>
    </div>
  )
}

export default Header
