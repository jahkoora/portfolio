import { motion } from "framer-motion"
import React from "react"

export const Headshot = () => {
  return (
    <motion.div
      animate={{ scale: [0, 1.1, 1] }}
      transition={{ delay: 0.7, duration: 0.7, ease: "easeInOut" }}
      className="bg-gradientBg rounded-full outline outline-1 outline-white outline-offset-8 hidden lg:block"
    >
      <img src="img/profile.png" className="rounded-full" />
    </motion.div>
  )
}
