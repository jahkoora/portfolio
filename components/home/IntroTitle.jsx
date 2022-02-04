import { motion } from "framer-motion"
import React from "react"

export const IntroTitle = () => {
  return (
    <div className="lg:h-screen px-4">
      <motion.div
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" flex flex-col justify-center content-center h-full"
      >
        <h2 className="text-white pb-2 text-3xl">
          I{"'"}m{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            whileHover={{}}
            className="name-highlight"
          >
            Jean-Marc
          </motion.span>
          ,
        </h2>
        <h1 className="text-white pb-1 text-4xl">I create beautiful web experiences.</h1>
        <p className="text-gray-500 pb-4 tracking-widest">Frontend Developer</p>
        <a href="#contact" data-scroll-to>
          <motion.button
            className="relative px-5 py-1 text-white uppercase tracking-widest border-gradient bg-transparent w-max"
            animate={{ rotate: [0, 2, -2, 1, -1, 0], transition: { delay: 0.5 } }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="absolute w-0 h-full inset-0"></span>
            <div className="relative">Hire Me</div>
          </motion.button>
        </a>
      </motion.div>
    </div>
  )
}
