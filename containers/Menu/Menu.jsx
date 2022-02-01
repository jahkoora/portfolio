import React from "react"
import { MenuItem } from "./MenuItem"

export const Menu = () => {
  return (
    <menu className="flex justify-center">
      <div className="flex flex-row divide-x items-center">
        <MenuItem>About</MenuItem>
        <MenuItem>Work</MenuItem>
        <MenuItem>Contact</MenuItem>
      </div>
    </menu>
  )
}
