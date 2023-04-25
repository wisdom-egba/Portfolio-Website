import React from "react"
import CurrentDate from "./CurrentDate"
import wisdom from "../assets/RBWC-26.jpg"
const head = `<Wisdom>About</Wisdom>`
const CompHeader = ({ date }) => {
  console.log(date)
  return (
    <div className="flex justify-end p-3">
      <CurrentDate />
    </div>
  )
}

export default CompHeader
