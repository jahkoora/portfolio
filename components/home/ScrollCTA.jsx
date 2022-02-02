import React, { useRef, useEffect } from "react"
import classNames from "classnames"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"

export const ScrollCTA = ({ position }) => {
  return (
    <>
      <div
        className={classNames("hidden lg:block absolute right-6 text-white", {
          "top-0": position === 1,
          "bottom-0": position === 2,
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
      <div
        className={classNames("lg:hidden absolute bottom-6 text-white rotate-90", {
          "left-0": position === 1,
          "right-0": position === 2,
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
    </>
  )
}
