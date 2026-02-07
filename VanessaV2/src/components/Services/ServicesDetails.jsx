import { useEffect, useRef } from "react";

import { ArrowRight, X } from "lucide-react";

import bgNav from "../../assets/bg-header.png";


import ScrollDetails from "../ScrollDetails";

export default function servicesDetails() {

    //COMPONENTE SCROLL DETAILS
    const detailsRefs = useRef([]);
    ScrollDetails(detailsRefs)

    return (
        <>
            <div className="container-details" >
                <h4>¿En qué puedo ayudarte?</h4>
                <div className="cont-details" >



                    {/*=================DETAILS  =================*/}


                    {/*=================DETAILS Trastorno del Espectro Autista =================*/}
                    <details ref={el => (detailsRefs.current[0] = el)}>

                        <summary>
                            <span className="summary-title">TEA</span>

                            <span className="icons">
                                <ArrowRight className="iconArrow" />
                                <span className="iconClose"><X /></span>
                            </span>
                        </summary>

                        <div className="contenido-details1" style={{ backgroundImage: `url(${bgNav})` }}>
                            <div className="texto-details1">
                                <h5>Trastorno del Espectro Autista</h5>
                                <p>Acompaño a niños, niñas y adolescentes con trastorno dentro del espectro autista desde un enfoque respetuoso,
                                    individualizado y centrado en sus fortalezas.</p>
                            </div>

                            <div className="lista-details1">
                                <ul >
                                    <p>Objetivos de la intervención:</p>
                                    <li>Favorecer la comunicación y las habilidades sociales.</li>
                                    <li>Trabajar la regulación emocional y conductual.</li>
                                    <li>Desarrollar la autonomía en rutinas diarias y escolares.</li>
                                    <li>Anticipar y estructurar el entorno para reducir ansiedad.</li>
                                    <li>Mejorar la adaptación al contexto escolar y social.</li>
                                </ul>

                                <ul>
                                    <p className="comoTrabajo"> Cómo trabajo:</p>
                                    <li>Uso de apoyos visuales y rutinas estructuradas.</li>
                                    <li>Intervención basada en el juego y la metodología ABA centrado en intereses del niño, niña o adolescente</li>
                                    <li>Trabajo conjunto con la familia y el centro educativo.</li>
                                    <li>Ritmo de trabajo adaptado a las necesidades del niño, niña y adolescente.</li>
                                </ul>



                            </div>
                        </div>
                    </details>

                    {/*=================DETAILS TDAH =================*/}
                    <details ref={el => (detailsRefs.current[1] = el)}>
                        <summary> <span className="summary-title">TDAH</span>
                            <span className="icons">
                                <ArrowRight className="iconArrow" />
                                <span className="iconClose"><X /></span>
                            </span>
                        </summary>
                        <div className="contenido-details1" style={{ backgroundImage: `url(${bgNav})` }}>
                            <div className="texto-details1" >
                                <h5>Trastorno por Déficit de Atención e Hiperactividad</h5>
                                <p>La intervención del trastorno por Déficit de Atención con o sin Hiperactividad (TDAH) se centra en ayudar al niño, niña y adolescente a comprender y gestionar su atención,
                                    impulsividad y organización, fortaleciendo su autoestima.</p>
                            </div>

                            <div className="lista-details1">
                                <ul >
                                    <p>Objetivos de la intervención:</p>
                                    <li>Mejorar la atención y la concentración.</li>
                                    <li>Desarrollar habilidades de autorregulación y control de impulsos.</li>
                                    <li>Trabajar la organización del tiempo y las tareas.</li>
                                    <li>Reducir la frustración y el impacto emocional de las dificultades.</li>
                                    <li>Acompañar el desarrollo de hábitos de estudio eficaces.</li>
                                </ul>

                                <ul>
                                    <p className="comoTrabajo">Cómo trabajo:</p>
                                    <li>Estrategias prácticas y visuales.</li>
                                    <li>Técnicas de gestión del tiempo (rutinas, pausas, herramientas como Pomodoro).</li>
                                    <li>Refuerzo positivo y objetivos alcanzables.</li>
                                    <li>Orientación a familias para el acompañamiento en casa.</li>
                                </ul>
                            </div>
                        </div>
                    </details>

                    {/*=================DETAILS Dislexia =================*/}
                    <details ref={el => (detailsRefs.current[2] = el)}>
                        <summary> <span className="summary-title">Dislexia</span>
                            <span className="icons">
                                <ArrowRight className="iconArrow" />
                                <span className="iconClose"><X /></span>
                            </span>
                        </summary>
                        <div className="contenido-details1" style={{ backgroundImage: `url(${bgNav})` }}>
                            <div className="texto-details1" >
                                <p>Trabajo con niños, niñas y adolescentes que presentan dislexia y otras dificultades específicas del aprendizaje, ayudándolos a desarrollar estrategias que les permitan un aprendizaje significativo.</p>
                            </div>

                            <div className="lista-details1">
                                <ul >
                                    <p>Objetivos de la intervención:</p>
                                    <li>Mejorar la lectura, escritura y comprensión lectora.</li>
                                    <li>Trabajar la conciencia fonológica y la fluidez lectora.</li>
                                    <li>Desarrollar estrategias de estudio adaptadas.</li>
                                    <li>Reducir la ansiedad y el rechazo hacia las tareas escolares.</li>
                                    <li>Fortalecer la confianza y la motivación.</li>
                                </ul>

                                <ul>
                                    <p className="comoTrabajo">Cómo trabajo:</p>
                                    <li>Actividades estructuradas y multisensoriales.</li>
                                    <li>Trabajo progresivo y adaptado al nivel del niño, niña y adolescente.</li>
                                    <li>Refuerzo de logros y avances.</li>
                                    <li>Coordinación con la escuela para ajustes necesarios.</li>
                                </ul>
                            </div>
                        </div>
                    </details>

                    {/*=================DETAILS Orientación familiar  =================*/}
                    <details ref={el => (detailsRefs.current[3] = el)}>

                        <summary>
                            <span className="title-summary2">Orientación familiar</span>

                            <span className="icons">
                                <ArrowRight className="iconArrow" />
                                <span className="iconClose"><X /></span>
                            </span>
                        </summary>
                        <div className="contenido-details1" style={{ backgroundImage: `url(${bgNav})` }}>
                            <div className="texto-details1" >
                                <p>Acompaño a madres, padres y tutores en la comprensión del diagnóstico y en la implementación de estrategias educativas en casa. Ofrezco pautas prácticas para mejorar la organización, el comportamiento, la comunicación y los hábitos de estudio, siempre desde un enfoque respetuoso y empático.
                                </p>
                                <p>Las familias son una parte esencial del proceso terapéutico. Este servicio está pensado para dar herramientas prácticas y reducir la sensación de desbordamiento.</p>
                            </div>

                            <div className="lista-details1">
                                <ul >
                                    <p className="familia">¿Qué trabajo con las familias?</p>
                                    <li>Comprender el diagnóstico y las características del niño.</li>
                                    <li>Estrategias para apoyar el aprendizaje en casa.</li>
                                    <li>Manejo de conductas desafiantes.</li>
                                    <li>Regulación emocional y establecimiento de rutinas.</li>
                                    <li>Comunicación positiva y límites respetuosos.</li>
                                </ul>

                            </div>
                        </div>
                    </details>

                    {/*=================DETAILS Colaboración con centros=================*/}
                    <details ref={el => (detailsRefs.current[4] = el)}>
                        <summary> <span className="title-summary3">Colaboración con centros</span>
                            <span className="icons">
                                <ArrowRight className="iconArrow" />
                                <span className="iconClose"><X /></span>
                            </span>
                        </summary>
                        <div className="contenido-details1" style={{ backgroundImage: `url(${bgNav})` }}>
                            <div className="texto-details1" >
                                <p>Mantengo comunicación directa con escuelas e institutos cuando la familia lo solicita, para asegurar la coherencia entre intervención, aula y hogar. Elaboro recomendaciones pedagógicas y participo en la adaptación de materiales y planes educativos personalizados.</p>

                                <p>La intervención es más eficaz cuando se extiende al contexto escolar. Por ello, ofrezco formación y asesoramiento a docentes y equipos educativos.</p>
                            </div>

                            <div className="lista-details1">
                                <ul >
                                    <p>Temáticas frecuentes:</p>
                                    <li>Estrategias inclusivas para el aula.</li>
                                    <li>Adaptaciones para alumnos con TEA, TDAH y dislexia.</li>
                                    <li>Manejo de la atención y la conducta en el aula.</li>
                                    <li>Diseño de apoyos visuales y estructuración del aprendizaje.</li>
                                </ul>

                                <ul>
                                    <p className="comoTrabajo">Formato</p>
                                    <li>Talleres prácticos y aplicables.</li>
                                    <li>Asesoramiento individual o grupal.</li>
                                    <li>Presencial u online.</li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </div>
            </div>

        </>
    )
}