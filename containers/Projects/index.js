import classNames from "classnames"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { projects } from "../../data"

export const Projects = () => {
  return (
    <>
      {projects.map((project, i) => {
        const { title, image, description, url } = project
        const divStyle = {
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }
        return (
          <>
            <motion.div
              key={`project-${i}`}
              style={divStyle}
              className={classNames(
                "relative bg-gradientBg rounded-2xl outline outline-1 outline-[#a752ee] outline-offset-8",
                {
                  "outline-[#2ed4fa]": i % 2,
                }
              )}
              whileHover={{ scale: 1.05 }}
            >
              <motion.h2 className="opacity-0">{title}</motion.h2>
              <motion.div
                className="flex flex-col gap-y-3 text-center justify-center items-center absolute inset-0 content-none w-full h-full bg-black/80 rounded-2xl opacity-0"
                whileHover={{ opacity: 1 }}
              >
                <motion.h2 className="text-white">{title}</motion.h2>
                <motion.button
                  className="relative px-5 py-1 text-white border-gradient bg-transparent w-max"
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
            </motion.div>
          </>
        )
      })}
    </>
  )
}
