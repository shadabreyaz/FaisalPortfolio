import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from 'framer-motion';

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import HorizontalJourney from "./components/HorizontalJourney"
import Advisory from "./components/Advisory"
import Contact from "./components/Contact"
import ScrollTop from "./components/ScrollTop"
import Modal from "./components/Modal"
import Slider from "./components/Slider"
import useIsDesktop from "./hook/useIsDesktop";

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);   // for popup

  const isDesktop = useIsDesktop(768); // md breakpoint
  const container = useRef(null);

  // only create scrollYProgress on desktop
  const { scrollYProgress } = isDesktop
    ? useScroll({ target: container, offset: ["start start", "end end"] })
    : { scrollYProgress: undefined };

  return (
    <>
      <Header hidden={hideHeader}/>
      <div ref={container} className="relative md:h-[224vh] lg:h-[200vh]">
        {/* <Hero setIsOpen={setIsOpen} scrollYProgress={scrollYProgress}/>
        <About scrollYProgress={scrollYProgress}/> */}
        <Hero
          setIsOpen={setIsOpen}
          scrollYProgress={isDesktop ? scrollYProgress : undefined}
        />
        <About scrollYProgress={isDesktop ? scrollYProgress : undefined} />
      </div>
      <HorizontalJourney setHideHeader={setHideHeader}/>
      <Advisory setIsOpen={setIsOpen}/>
      <Slider logos={[
        '/slide1.webp',
        '/slide2.webp',
        '/slide3.webp',
        '/slide4.webp',
        '/slide5.webp',
        '/slide6.webp',
        '/slide7.webp',
       ]}  speed={85}/>
      <Contact />
      <ScrollTop />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
    </>
  )
}

export default App
