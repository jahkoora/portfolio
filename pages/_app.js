import { useEffect, useState } from "react"
import CustomCursor from "../components/CustomCursor"
import { Menu } from "../containers/Menu/Menu"
import "../styles/globals.css"
import "../styles/locomotive.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CustomCursor />
      <div data-scroll-container id="app-container">
        <Component {...pageProps} />
      </div>
      <Menu />
    </div>
  )
}

export default MyApp
