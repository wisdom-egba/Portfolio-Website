import React, { useEffect, useState } from "react"
import moment from "moment/moment"
import { motion } from "framer-motion"
const CurrentDate = () => {
  // let time = moment().format("h:mm:ss a")
  // let date = moment().format("LL")

  // const [currentTime, setCurrentTime] = useState(time)

  // const updateTime = () => {
  //   let time = moment().format("h:mm:ss a")
  //   setCurrentTime(time)
  // }
  // setInterval(updateTime, 1000)
  const locale = "en"
  const [today, setDate] = React.useState(new Date()) // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date())
    }, 60 * 1000)
    return () => {
      clearInterval(timer) // Returning a funtion that clears the timer so that it will stop being called on unmount
    }
  }, [])

  const day = today.toLocaleDateString(locale, { weekday: "long" })
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`

  const hour = today.getHours()
  const wish = ` ${
    (hour <= 4 && "Go to Sleep") ||
    (hour < 12 && "Good Morning") ||
    (hour < 17 && "Good Afternoon") ||
    "Good Evening"
  } `

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  })

  return (
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
    >
      {/* <CompHeader date={date} /> */}
      <p className="flex justify-end items-end pFont md:text-xl">{time}</p>
      <p className="flex justify-end items-end pFont md:text-xl ">{date}</p>
      <p className="flex justify-end items-end pFont md:text-xl">{wish}</p>
    </motion.div>
  )
}

export default CurrentDate
