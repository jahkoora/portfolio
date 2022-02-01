import React from "react"

export const Title = ({ title, shadowTitle }) => {
  return (
    <div className="title ">
      <h2 className="relative text-4xl text-white underline underline-offset-[1rem]">
        {title}{" "}
        <span className="text-[10rem] font-medium tracking-wider absolute left-0 bottom-0 m-0 leading-0 text-white/[.04]">
          {shadowTitle}
        </span>
      </h2>
    </div>
  )
}
