import Head from "next/head"
import { useEffect } from "react"
import { Headshot } from "../components/home/Headshot"
import { ScrollCTA } from "../components/home/ScrollCTA"
import { IntroTitle } from "../components/home/IntroTitle"
import { Title } from "../components/home/Title"
import { AboutMe } from "../data/index.js"
import { Skills } from "../containers/Skills"
import { motion } from "framer-motion"
import { Projects } from "../containers/Projects"

export default function Home() {
  useEffect(() => {
    let scroll
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smoothMobile: false,
        resetNativeScroll: true,
        direction: "horizontal",
      })
    })
    // `useEffect`'s cleanup phase
    return () => scroll.destroy()
  })

  return (
    <>
      <Head>
        <title>Jean-Marc Aliphon - Portfolio</title>
        <meta name="description" content="The portfolio of Jean-Marc Aliphon" />
      </Head>

      <div className="flex flex-row" id="main-container">
        <main className="flex flex-row bg-mainBg">
          <section className="w-screen first grid grid-cols-2 justify-items-center items-center relative">
            <ScrollCTA position={"top"} />
            <IntroTitle />
            <Headshot />
            <ScrollCTA position={"bottom"} />
          </section>
          <section className="w-screen grid grid-cols-2 grid-rows-2 justify-items-center items-center">
            <Title title="About me" shadowTitle="About" />
            <div className="">
              <p className="text-white block max-w-lg">{AboutMe}</p>
            </div>
            <motion.div className="row-start-2 row-end-3 col-start-1 col-end-3">
              <Skills />
            </motion.div>
          </section>
          <section className="w-screen grid grid-cols-5 grid-rows-2 justify-items-center items-center">
            <Title title="Projects" shadowTitle="Work" />
            <div className="grid grid-cols-5 row-start-2 row-end-3 col-start-1 col-end-6 h-[300px] gap-x-10">
              <Projects />
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
