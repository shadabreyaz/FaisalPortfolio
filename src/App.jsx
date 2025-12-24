import { useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import HorizontalJourney from "./components/HorizontalJourney"
import Advisory from "./components/Advisory"
import Contact from "./components/Contact"
import ScrollTop from "./components/ScrollTop"
import Modal from "./components/Modal"
import Slider from "./components/Slider"

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);   // for popup
  return (
    <>
      <Header hidden={hideHeader}/>
      <Hero setIsOpen={setIsOpen}/>
      <About />
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
