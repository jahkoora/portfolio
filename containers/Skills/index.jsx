import { motion } from "framer-motion"
import React from "react"
import { skills } from "../../data"

export const Skills = () => {
  return (
    <motion.div className="skills-container grid grid-cols-7 gap-x- justify-center items-center">
      {skills.map((skill, index) => {
        const divStyle = { "--i": index }
        return (
          <motion.div
            className="flex flex-col p-12 justify-center items-center shadow-xl "
            style={divStyle}
            key={`skill-${index}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={skill.img} alt={skill.title} />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
