import React, { useEffect } from "react"
import { MenuItem } from "./MenuItem"

export const Menu = ({ isMobile }) => {
  return (
    <menu id="menu" data-scroll data-scroll-sticky data-scroll-target="#stick" className="flex justify-center">
      <div className="flex flex-row divide-x items-center">
        <MenuItem href="home">Home</MenuItem>
        <MenuItem href="about">About</MenuItem>
        <MenuItem href="work">Work</MenuItem>
        <MenuItem href="contact">Contact</MenuItem>
      </div>
    </menu>
  )
}
