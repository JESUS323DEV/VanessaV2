import { Link } from "react-router-dom"
//BG
import bgHero from "../assets/dibujo2.jpg"


import ScrollSections from "../components/ScrollSections"

export default function Hero() {

    return (
        <>


            {/*=================HERO=================*/}

            <section id='hero'>
                <div className='bgHero' style={{ backgroundImage: `url(${bgHero})` }}>
                    <div className='contenido-hero'>
                        <div className='text-hero'>
                            <h1>Comprender, acompañar y potenciar</h1>
                            <p >Atención infanto-juvenil personalizada.</p>
                            <p>Un apoyo en cada pequeño paso.</p>
                        </div>

                        <div className="cont-cta-hero">
                            <div className='cta-hero'>
                                <Link to="/servicios"
                                    onClick={() => {
                                        ScrollSections("services");

                                    }} >
                                    Más información
                                </Link>
                            </div>

                            <div className='cta-hero1'>
                                <Link to="/contacto"
                                    onClick={() => {
                                        ScrollSections("contact");

                                    }} >
                                    Contacto
                                </Link>
                            </div>

                        </div>



                    </div>
                </div>
            </section>

        </>
    )
}