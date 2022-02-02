import classNames from "classnames"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { projects } from "../../data"
import { ProjectDescriptionDesktop } from "./ProjectDescriptionDesktop"
import { ProjectDescriptionMobile } from "./ProjectDescriptionMobile"

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
              <ProjectDescriptionDesktop title={title} description={description} url={url} />
            </motion.div>
            <ProjectDescriptionMobile key={`project-desc-${i}`} title={title} description={description} url={url} />
          </>
        )
      })}
    </>
  )
}
