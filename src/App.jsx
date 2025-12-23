import { useState } from "react"

import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import HorizontalJourney from "./components/HorizontalJourney"

function App() {
  const [hideHeader, setHideHeader] = useState(false);
  return (
    <>
      <Header hidden={hideHeader}/>
      <Hero />
      <About />
      <HorizontalJourney setHideHeader={setHideHeader}/>
      <About />
    </>
  )
}

export default App
