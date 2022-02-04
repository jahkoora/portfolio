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
import Form from "../components/Contact/form"
import { Menu } from "../containers/Menu/Menu"

export default function Home({ isMobile }) {
  return (
    <>
      <Head>
        <title>Jean-Marc Aliphon - Portfolio</title>
        <meta name="description" content="The portfolio of Jean-Marc Aliphon" />
      </Head>

      <div data-scroll-container className="flex flex-row relative" id="main-container">
        <main id="stick" className="flex lg:flex-row flex-col bg-mainBg">
          <section
            data-scroll-section-id="section-1"
            id="home"
            className="w-screen first grid lg:grid-cols-2 justify-items-center items-center relative"
          >
            <ScrollCTA position={1} />
            <IntroTitle />
            <Headshot />
            <ScrollCTA position={2} isMobile={isMobile} />
          </section>
          <section
            data-scroll-section-id="section-2"
            id="about"
            className="w-screen px-4 pt-10 lg:px-0 lg:pt-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center lg:items-center"
          >
            <Title title="About me" shadowTitle="About" />
            <div className=" lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:block flex justify-center lg:mt-0 mt-[5rem]">
              <p className="text-white block max-w-lg lg:text-left text-center">{AboutMe}</p>
            </div>
            <motion.div className="lg:row-start-2 lg:row-end-3 lg:block lg:col-start-1 lg:col-end-3 lg:mt-0 mt-[5rem] flex justify-center">
              <Skills />
            </motion.div>
          </section>
          <section
            data-scroll-section-id="section-3"
            id="work"
            className="w-screen px-4 lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:justify-items-center lg:items-center lg:px-0 lg-pt-0 lg:mt-0 mt-[7rem]"
          >
            <Title title="Projects" shadowTitle="Work" />
            <div className="my-[5rem] lg:my-0 lg:mt-0 px-4 grid grid-cols-2 gap-[3rem] lg:grid-cols-5 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-6 lg:h-[300px] gap-x-10">
              <Projects />
            </div>
          </section>
          <section
            id="contact"
            className="w-screen px-4 pt-10 lg:px-0 lg:pt-0 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:justify-items-center lg:items-center mb-[8rem]"
          >
            <Title title="Connect with me" shadowTitle="Contact" />
            <Form />
          </section>
          <Menu />
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const UA = context.req.headers["user-agent"]
  const mobile = Boolean(UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
  return {
    props: {
      isMobile: mobile ? true : false,
    },
  }
}
