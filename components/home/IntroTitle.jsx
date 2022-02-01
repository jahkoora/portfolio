import { motion } from "framer-motion"
import React from "react"

export const IntroTitle = () => {
  return (
    <div className="h-screen px-4">
      <div className=" flex flex-col justify-center content-center h-full">
        <h2 className="text-white pb-2 text-3xl">
          I{"'"}m{" "}
          <motion.span whileHover={{}} className="name-highlight">
            Jean-Marc
          </motion.span>
          ,
        </h2>
        <h1 className="text-white pb-1 text-4xl">I create beautiful web experiences.</h1>
        <p className="text-gray-500 pb-4 tracking-widest">Frontend Developer</p>
        <motion.button
          className="relative px-5 py-1 text-white uppercase tracking-widest border-gradient bg-transparent w-max"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="absolute w-0 h-full inset-0"></span>
          <div className="relative">Hire Me</div>
        </motion.button>
      </div>
    </div>
  )
}
