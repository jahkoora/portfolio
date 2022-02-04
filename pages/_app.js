import { useEffect, useState } from "react"
import CustomCursor from "../components/CustomCursor"
import "../styles/globals.css"
import "../styles/locomotive.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let scroll
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        resetNativeScroll: true,
        direction: "horizontal",
        smoothMobile: 1,
        smartphone: {
          smooth: false,
          direction: "vertical",
        },
        tablet: {
          smooth: false,
          direction: "vertical",
        },
      })
    })
    return () => scroll.destroy()
  })
  return (
    <div>
      <CustomCursor />
      <div data-scroll-container id="app-container">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
