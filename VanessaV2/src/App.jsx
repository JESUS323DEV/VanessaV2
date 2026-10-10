import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"

import Hero from "./sections/Hero"
import AboutMe from "./sections/AboutMe"
import Services from "./sections/Services"
import Contact from "./sections/Contact"

import Privacidad from "./pages/Privacidad"
import AvisoLegal from "./pages/AvisoLegal"

const Home = () => {
  const { hash } = useLocation();

  // Si se llega con un apartado en la dirección (/#contact, /#aboutMe...), baja hasta él cuando la página ya está pintada
  useEffect(() => {
    if (!hash) return;
    const irAlApartado = () => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    const espera = setTimeout(irAlApartado, 300);
    // Al terminar de cargar las imágenes las posiciones cambian: se vuelve a colocar
    window.addEventListener("load", irAlApartado, { once: true });
    return () => {
      clearTimeout(espera);
      window.removeEventListener("load", irAlApartado);
    };
  }, [hash]);

  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Contact />
    </main>
  );
};

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
