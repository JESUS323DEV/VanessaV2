import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"

import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import Services from "./sections/Services"
import Contact from "./sections/Contact"

import Privacidad from "./pages/Privacidad"
import AvisoLegal from "./pages/AvisoLegal"

const Home = () => (
  <main>
    <Hero />
    <AboutMe />
    <Services />
    <Contact />
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
