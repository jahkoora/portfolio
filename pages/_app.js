import { useEffect } from "react"
import CustomCursor from "../components/CustomCursor"
import { Menu } from "../containers/Menu/Menu"
import "../styles/globals.css"
import "../styles/locomotive.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <div data-scroll-container id="app-container">
        <Component {...pageProps} />
      </div>
      <Menu />
    </>
  )
}

export default MyApp
