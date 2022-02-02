import { motion } from "framer-motion"
import React from "react"

export const ProjectDescriptionMobile = ({ title, description, url }) => {
  return (
    <motion.div className="lg:hidden">
      <motion.h2 className="text-white mb-4">{title}</motion.h2>
      <motion.button
        className="mb-4 relative px-5 py-1 text-white border-gradient bg-transparent w-max"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="absolute w-0 h-full inset-0"></span>
        <a href={url} target="_blank" rel="noreferrer" className="relative">
          view project
        </a>
      </motion.button>
      <motion.p className="text-white">{description}</motion.p>
    </motion.div>
  )
}
