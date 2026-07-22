import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import bgSection from "../assets/bg-header.png";
import galeria1 from "../assets/galeria1.png";
import galeria2 from "../assets/galeria2.png";
import galeria3 from "../assets/galeria3.png";
import galeria4 from "../assets/galeria4.png";

const GALLERY_IMAGES = [galeria1, galeria2, galeria3, galeria4];
const AUTOPLAY_MS = 4000;

function Gallery() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((current) => (current + 1) % GALLERY_IMAGES.length);
        }, AUTOPLAY_MS);

        return () => clearInterval(id);
    }, []);

    return (
        <div className="relative aspect-3/4 w-full md:max-w-sm md:mx-auto overflow-hidden rounded-2xl shadow-lg">
            {GALLERY_IMAGES.map((src, i) => (
                <img
                    key={src}
                    src={src}
                    alt="Vanessa Medina Valdez"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {GALLERY_IMAGES.map((src, i) => (
                    <span
                        key={src}
                        className={`h-1.5 w-1.5 rounded-full transition-colors ${i === index ? "bg-principal" : "bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function AboutMe() {
    const [open, setOpen] = useState(false);

    return (
        <section
            id="aboutMe"
            className="scroll-mt-8 md:scroll-mt-15 bg-white bg-cover bg-center px-6 py-16 lg:py-30 sm:px-10 "
            style={{ backgroundImage: `url(${bgSection})` }}
        >
            <div className="text-center lg:pb-10 ">
                <h2 className="font-serif text-4xl text-neutral-900">Sobre mí</h2>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-principal" />
                    <span className="h-1.5 w-1.5 rounded-full bg-principal" />
                    <span className="h-px w-10 bg-principal" />
                </div>
            </div>

            <div className=" lg:grid lg:grid-cols-2 lg:max-w-5xl lg:mx-auto xl:max-w-6xl items-center justify-center">

                <div className="mt-10">
                    <Gallery />
                </div>

                <div className="mt-8  lg:max-w-md md:mx-auto ">
                    <h3 className="font-serif text-2xl text-center py-3 text-neutral-900">
                        Vanessa Medina Valdez
                    </h3>


                    <p className="mt-4 text-sm leading-relaxed text-neutral-700 ">
                        <strong className="font-semibold text-neutral-900">
                            Psicóloga y psicopedagoga
                        </strong>{" "}
                        especializada en Dificultades del Aprendizaje y Trastornos del
                        Neurodesarrollo, formada en la{" "}
                        <strong className="font-semibold text-neutral-900">
                            Universidad de Barcelona
                        </strong>{" "}
                        y{" "}
                        <strong className="font-semibold italic text-neutral-900">
                            Universitat Oberta de Catalunya
                        </strong>
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                        Cuento con más de 5 años de experiencia clínica, me especializo en
                        la intervención{" "}
                        <strong className="font-semibold text-neutral-900">
                            TEA, TDAH y dislexia y sus comorbilidades.
                        </strong>
                    </p>
                    <div
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:grid-rows-[1fr] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                                Mi metodología de trabajo esta basada en la evidencia,
                                aplicando principios de{" "}
                                <strong className="font-semibold text-neutral-900">
                                    ABA, TEACCH y PECS
                                </strong>{" "}
                                para potenciar la comunicación y autonomía.
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                                En casos de Dislexia y TDAH, centro mi intervención en la
                                mejora de las funciones ejecutivas y la{" "}
                                <strong className="font-semibold text-neutral-900">
                                    inteligencia emocional
                                </strong>
                                , utilizando técnicas de autoinstrucciones y refuerzo
                                positivo para lograr un desarrollo académico y personal
                                equilibrado.
                            </p>

                            <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                                Mi pasión es acompañar a niños, niñas, adolescentes y sus
                                familias en el{" "}
                                <strong className="font-semibold text-neutral-900">
                                    desarrollo de habilidades de aprendizaje
                                </strong>
                                , atención y bienestar emocional.
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 text-center  md:hidden">
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="text-sm font-medium text-principal underline underline-offset-2"
                        >
                            {open ? "Leer menos" : "Leer más"}
                        </button>
                    </div>


                    <a
                        href="/#contact"
                        className="mt-8 flex items-center justify-center w-2xs mx-auto gap-2 rounded-full bg-principal  py-3 font-medium text-neutral-900 transition hover:brightness-95"
                    >
                        <MessageCircle size={20} />
                        Hablemos de tu caso
                    </a>
                </div>
            </div>
        </section>
    );
}
