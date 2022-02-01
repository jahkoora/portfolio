import React from "react"
import classNames from "classnames"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"

export const ScrollCTA = ({ position }) => {
  return (
    <div
      className={classNames("absolute right-6 text-white", {
        "top-0": position === "top",
        "bottom-0": position === "bottom",
      })}
    >
      <motion.div
        animate={{ x: ["0%", "-25%", "0%"] }}
        transition={{ ease: "easeInOut", loop: Infinity, duration: 1 }}
        className="font-headings tracking-widest"
      >
        scroll <BsArrowRight className="inline" />
      </motion.div>
    </div>
  )
}
