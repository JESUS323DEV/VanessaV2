import { useState } from "react";


import aboutMe from "../assets/vanessa2.jpg"





export default function AboutMe() {


    const [open, setOpen] = useState(false);

    return (
        <>
            {/*=================ABOUT ME=================*/}
            <section id='aboutMe'>
                <div className='cont-aboutMe'>
                    <h2>Sobre mí</h2>

                    <div className='contenido-aboutMe'>

                        <div className='img-aboutMe'>
                            <img src={aboutMe} alt="Vanessa" />
                        </div>

                        <div className='texto-aboutMe'>
                            <h3>Vanessa Medina Valdez</h3>

                            <p> <b>Psicóloga y psicopedagoga</b>  especializada en Dificultades del Aprendizaje y Trastornos del Neurodesarrollo,
                                formada en la <b> Universidad de Barcelona.</b></p>

                            <p> Cuento con más de 5 años de experiencia aplicando principios <b>ABA</b>, especialmente en la intervención con niños y adolescentes con  <b>TEA, TDAH y dislexia.</b>
                            </p>



                            <div className={`accordion-content ${open ? "open" : ""}`}>
                                <div className="text-content">
                                    <p>
                                        Mi pasión es acompañar a niños y niñas, adolescentes y sus familias en el <b>desarrollo de habilidades de aprendizaje</b>, atención y bienestar emocional. Trabajo con niños y niñas con TEA, TDAH y dificultades de aprendizaje como dislexia.</p>

                                    <p>Creo que cada niño, niña y adolescente debe aprende de manera <b>única</b> y que el acompañamiento respetuoso y estructurado puede marcar la diferencia en su <b>desarrollo.</b> </p>
                                    <p>Trabajo estrechamente con familias, docentes y equipos educativos para que los niños se sientan capaces, <b>comprendidos y motivados.</b> </p>
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