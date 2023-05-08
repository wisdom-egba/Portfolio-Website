import { projectData } from "./projectData"
import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

const Projects = ({ toggleMode }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <>
      <div className="relative overflow-hidden flex-col max-w-full flex items-center justify-center space-y-9 mx-auto z-20">
        <h3 className="relative  tracking-[15px] uppercase py-4">Projects</h3>

        <div
          className={
            toggleMode
              ? "relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#F7EFE5] scrollbar-thin scrollbar-thumb-orange-400 outline-none"
              : "relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[rgb(36,36,36)] scrollbar-thin scrollbar-thumb-orange-400 outline-none"
          }
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {projectData.map((project) => {
              const { id, title, description, img } = project
              return (
                <SwiperSlide
                  key={id}
                  className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center z-10 "
                >
                  <div
                    // initial={{ scale: 0.4, opacity: 0.2 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // transition={{ duration: 1.5 }}
                    className="snap-center flex items-center justify-center filter "
                  >
                    <img
                      className=" md:w-[50%] lg:w-[50%] rounded-xl "
                      src={img}
                      alt=""
                    />
                    <div className="absolute text-black flex gap-3 w-full justify-center mt-40 z-30 hover:grayscale">
                      <button className="p-2 rounded-full border outline-none">
                        Source Code
                      </button>
                      <button className="p-2 rounded-full border outline-none ">
                        Demo-Link
                      </button>
                    </div>
                  </div>

                  <div className="font-semibold py-8">
                    <h1 className="text-red">{title}</h1>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {projectData.map((project) => {
              const { id, title, description, img } = project
              return (
                <SwiperSlide
                  key={id}
                  className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center z-10 "
                >
                  <div
                    // initial={{ scale: 0.4, opacity: 0.2 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    // transition={{ duration: 1.5 }}
                    className="snap-center flex items-center justify-center filter "
                  >
                    <img
                      className=" md:w-[50%] lg:w-[50%] rounded-xl "
                      src={img}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Projects
