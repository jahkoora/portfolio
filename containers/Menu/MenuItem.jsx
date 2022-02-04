import React, { useEffect } from "react"

export const MenuItem = ({ children, href }) => {
  return (
    <a id={`a-${href}`} href={`#${href}`} data-scroll-to className="px-4">
      {children}
    </a>
  )
}
