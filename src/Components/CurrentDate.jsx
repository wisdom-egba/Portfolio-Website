import React, { useEffect, useState } from "react"
import moment from "moment/moment"
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
  const wish = `Good ${
    (hour < 12 && "Morning") ||
    (hour < 17 && "Afternoon") ||
    (hour <= 3 && "Go to Bed") ||
    "Good Evening"
  } `

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  })

  return (
    <div>
      {/* <CompHeader date={date} /> */}
      <p className="flex justify-end items-end pFont">{time}</p>
      <p className="pFont">{date}</p>
      <p className="pFont">{wish}</p>
    </div>
  )
}

export default CurrentDate
