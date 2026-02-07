import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"

import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import Services from "./sections/Services"
import Contact from "./sections/Contact"


import ScrollHandler from "./components/ScrollHandler"

const HomeLayout = () => (
  <>
    <Header />

    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
    </main>

    <Footer />
  </>
);
function App() {
  return (
    <BrowserRouter>

      <ScrollHandler />
      
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/sobre-mi" element={<HomeLayout />} />
        <Route path="/servicios" element={<HomeLayout />} />
        <Route path="/contacto" element={<HomeLayout />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App

