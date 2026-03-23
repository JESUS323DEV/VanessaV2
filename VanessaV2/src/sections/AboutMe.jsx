import { useState, useEffect } from "react";

import vanessa2 from "../assets/vanessa2.jpg"
import galeria1 from "../assets/galeria1.png"
import galeria2 from "../assets/galeria2.png"
import galeria3 from "../assets/galeria3.png"
import galeria4 from "../assets/galeria4.png"

const images = [vanessa2, galeria1, galeria2, galeria3, galeria4];

export default function AboutMe() {

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const prev = () => setCurrent(prev => (prev - 1 + images.length) % images.length);
    const next = () => setCurrent(prev => (prev + 1) % images.length);

    return (
        <>
            {/*=================ABOUT ME=================*/}
            <section id='aboutMe'>
                <div className='cont-aboutMe'>
                    <h2>Sobre mí</h2>

                    <div className='contenido-aboutMe'>

                        <div className='img-aboutMe'>
                            <div className="carousel">
                                <div className="carousel-img-wrapper">
                                    <button className="carousel-btn carousel-btn--prev" onClick={prev}>&#8249;</button>
                                    <img src={images[current]} alt={`Vanessa ${current + 1}`} />
                                    <button className="carousel-btn carousel-btn--next" onClick={next}>&#8250;</button>
                                </div>
                                <div className="carousel-dots">
                                    {images.map((_, i) => (
                                        <span
                                            key={i}
                                            className={`carousel-dot ${i === current ? "active" : ""}`}
                                            onClick={() => setCurrent(i)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='texto-aboutMe'>
                            <h3>Vanessa Medina Valdez</h3>

                            <p> <b>Psicóloga y psicopedagoga</b>  especializada en Dificultades del Aprendizaje y Trastornos del Neurodesarrollo,
                                formada en la <b> Universidad de Barcelona</b> y <i><b>Universitat Oberta de Catalunya</b></i></p>

                            <p>Cuento con más de 5 años de experiencia clínica, me especializo en la intervención de TEA, TDAH, Dislexia   <b>TEA, TDAH y dislexia y sus comorbilidades.</b>
                            </p>

                            <div className={`accordion-content ${open ? "open" : ""}`}>
                                <div className="text-content">
                                    <p> Mi metodología de trabajo esta basada en la evidencia, aplicando principios de <b> ABA, TEACCH y PECS</b> para potenciar la comunicación y autonomía. </p>

                                    <p>  En casos de Dislexia y TDAH, centro mi intervención en la mejora de las funciones ejecutivas y la inteligencia emocional, utilizando técnicas de autoinstrucciones y refuerzo positivo para lograr un desarrollo académico y personal equilibrado.</p>

                                    <p>  Mi pasión es acompañar a niños y niñas, adolescentes y sus familias en el <b>desarrollo de habilidades de aprendizaje</b>, atención y bienestar emocional. Trabajo con niños y niñas con TEA, TDAH y dificultades de aprendizaje como dislexia.</p>

                                </div>
                            </div>

                            <div className="cont-leer">
                                <button className="leer-mas-menos" onClick={() => setOpen(!open)}>
                                    {open ? "Leer menos" : "Leer más"}
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
