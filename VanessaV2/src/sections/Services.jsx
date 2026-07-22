import { useEffect, useRef, useState } from "react";
import { UserSearch, HandHeart, ChevronDown } from "lucide-react";

const APPROACH_TABS = {
    evaluacion: {
        label: "Evaluación",
        icon: UserSearch,
        heading: "Orientación diagnóstica",
        text: "Realizo una valoración completa para identificar dificultades específicas del aprendizaje y necesidades educativas en niños y adolescentes, especialmente en casos de TEA, TDAH y Dislexia. A través de pruebas estandarizadas, entrevistas y observación, elaboro un informe detallado con recomendaciones claras para familias y centros educativos.",
    },
    intervencion: {
        label: "Intervención",
        icon: HandHeart,
        heading: "Intervención y apoyo educativo",
        text: "Trabajo mediante metodologías adaptadas a las características de cada perfil, favoreciendo la autonomía del estudiante en sus diferentes contextos sociales y de aprendizaje. La intervención se diseña de forma individualizada, teniendo en cuenta sus fortalezas, necesidades y ritmo de desarrollo, con el objetivo de potenciar habilidades.",
    },
};

const SERVICE_ITEMS = [
    {
        id: "tea",
        title: "TEA",
        heading: "Trastorno del Espectro Autista",
        intro: [
            "Acompaño a niños, niñas y adolescentes con trastorno del espectro autista desde un enfoque respetuoso, individualizado y centrado en sus fortalezas.",
        ],
        lists: [
            {
                label: "Objetivos de la intervención:",
                items: [
                    "Favorecer la comunicación y las habilidades sociales.",
                    "Trabajar la regulación emocional y conductual.",
                    "Desarrollar la autonomía en rutinas diarias y escolares.",
                    "Anticipar y estructurar el entorno para reducir ansiedad.",
                    "Mejorar la adaptación al contexto escolar y social.",
                ],
            },
            {
                label: "Cómo trabajo:",
                items: [
                    "Uso de apoyos visuales y rutinas estructuradas.",
                    "Intervención basada en el juego y la metodología ABA centrado en intereses del niño, niña o adolescente.",
                    "Trabajo conjunto con la familia y el centro educativo.",
                    "Ritmo de trabajo adaptado a las necesidades del niño, niña y adolescente.",
                ],
            },
        ],
    },
    {
        id: "tdah",
        title: "TDAH",
        heading: "Trastorno por Déficit de Atención e Hiperactividad",
        intro: [
            "La intervención del trastorno por Déficit de Atención con o sin Hiperactividad (TDAH) se centra en ayudar al niño, niña y adolescente a comprender y gestionar su atención, impulsividad y organización, fortaleciendo su autoestima.",
        ],
        lists: [
            {
                label: "Objetivos de la intervención:",
                items: [
                    "Mejorar la atención y la concentración.",
                    "Desarrollar habilidades de autorregulación y control de impulsos.",
                    "Trabajar la organización del tiempo y las tareas.",
                    "Reducir la frustración y el impacto emocional de las dificultades.",
                    "Acompañar el desarrollo de hábitos de estudio eficaces.",
                ],
            },
            {
                label: "Cómo trabajo:",
                items: [
                    "Estrategias prácticas y visuales.",
                    "Técnicas de gestión del tiempo (rutinas, pausas, herramientas como Pomodoro).",
                    "Refuerzo positivo y objetivos alcanzables.",
                    "Orientación a familias para el acompañamiento en casa.",
                ],
            },
        ],
    },
    {
        id: "dislexia",
        title: "Dislexia",
        intro: [
            "Trabajo con niños, niñas y adolescentes que presentan dislexia y otras dificultades específicas del aprendizaje, ayudándolos a desarrollar estrategias que les permitan un aprendizaje significativo.",
        ],
        lists: [
            {
                label: "Objetivos de la intervención:",
                items: [
                    "Mejorar la lectura, escritura y comprensión lectora.",
                    "Trabajar la conciencia fonológica y la fluidez lectora.",
                    "Desarrollar estrategias de estudio adaptadas.",
                    "Reducir la ansiedad y el rechazo hacia las tareas escolares.",
                    "Fortalecer la confianza y la motivación.",
                ],
            },
            {
                label: "Cómo trabajo:",
                items: [
                    "Actividades estructuradas y multisensoriales.",
                    "Trabajo progresivo y adaptado al nivel del niño, niña y adolescente.",
                    "Refuerzo de logros y avances.",
                    "Coordinación con la escuela y familias.",
                ],
            },
        ],
    },
    {
        id: "orientacion-familiar",
        title: "Orientación familiar",
        intro: [
            "Acompaño a madres, padres y tutores en la comprensión del diagnóstico y en la implementación de estrategias educativas en casa. Ofrezco pautas prácticas para mejorar la organización, el comportamiento, la comunicación y los hábitos de estudio, siempre desde un enfoque respetuoso y empático.",
            "Las familias son una parte esencial del proceso terapéutico. Este servicio está pensado para dar herramientas prácticas y reducir la sensación de desbordamiento.",
        ],
        lists: [
            {
                label: "¿Qué trabajo con las familias?",
                items: [
                    "Comprender el diagnóstico y las características del niño.",
                    "Estrategias para apoyar el aprendizaje en casa.",
                    "Manejo de conductas desafiantes.",
                    "Regulación emocional y establecimiento de rutinas.",
                    "Comunicación positiva y límites respetuosos.",
                ],
            },
        ],
    },
    {
        id: "colaboracion-centros",
        title: "Colaboración con centros",
        intro: [
            "Mantengo comunicación directa con escuelas e institutos cuando la familia lo solicita, para asegurar la coherencia entre intervención, aula y hogar. Elaboro recomendaciones pedagógicas y participo en la adaptación de materiales y planes educativos personalizados.",
            "La intervención es más eficaz cuando se extiende al contexto escolar. Por ello, ofrezco formación y asesoramiento a docentes y equipos educativos.",
        ],
        lists: [
            {
                label: "Temáticas frecuentes:",
                items: [
                    "Estrategias inclusivas para el aula.",
                    "Adaptaciones para alumnos con TEA, TDAH y dislexia.",
                    "Manejo de la atención y la conducta en el aula.",
                    "Diseño de apoyos visuales y estructuración del aprendizaje.",
                ],
            },
            {
                label: "Formato",
                items: [
                    "Talleres prácticos y aplicables.",
                    "Asesoramiento individual o grupal.",
                    "Presencial u online.",
                ],
            },
        ],
    },
];

export default function Services() {
    const [tab, setTab] = useState("evaluacion");
    const [openItem, setOpenItem] = useState(null);
    const itemRefs = useRef({});

    const active = APPROACH_TABS[tab];

    useEffect(() => {
        if (!openItem) return;

        const el = itemRefs.current[openItem];
        if (!el) return;

        // Espera a que termine la transición de colapso del acordeón que
        // estuviera abierto antes; si medimos antes, la posición de este
        // item todavía se está moviendo y el scroll calculado queda obsoleto.
        const timeout = setTimeout(() => {
            const header = document.querySelector("header");
            const offset = header ? header.offsetHeight : 0;
            const y = el.getBoundingClientRect().top + window.scrollY - offset - 16;

            window.scrollTo({ top: y, behavior: "smooth" });
        }, 320);

        return () => clearTimeout(timeout);
    }, [openItem]);

    return (
        <section id="services" className="bg-white px-6 py-16 sm:px-10 lg:py-30">
            <div className="text-center lg:pb-10">
                <h2 className="font-serif text-4xl text-neutral-900">Mis servicios</h2>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-principal" />
                    <span className="h-1.5 w-1.5 rounded-full bg-principal" />
                    <span className="h-px w-10 bg-principal" />
                </div>
            </div>


            <div className="lg:mx-auto lg:grid lg:max-w-5xl xl:max-w-6xl lg:grid-cols-2 lg:gap-16">
                <div className="mt-10">
                    <h3 className="text-center font-serif text-xl text-neutral-900">
                        Evaluación e intervención especializada
                    </h3>

                    <div className="mx-auto mt-5 flex w-fit rounded-full border border-principal/40 p-1">
                        {Object.entries(APPROACH_TABS).map(([key, { label, icon: Icon }]) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setTab(key)}
                                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${tab === key
                                        ? "bg-principal text-neutral-900"
                                        : "text-neutral-600"
                                    }`}
                            >
                                <Icon size={18} />
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="mx-auto mt-6 max-w-md text-center">
                        <h4 className="font-serif text-lg text-neutral-900">
                            {active.heading}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                            {active.text}
                        </p>
                    </div>
                </div>

                <div className="mt-14 lg:mt-0">
                    <h3 className="text-center font-serif text-xl text-neutral-900">
                        ¿En qué puedo ayudarte?
                    </h3>

                    <div className="mt-6 flex flex-col gap-3">
                        {SERVICE_ITEMS.map((item) => {
                            const isOpen = openItem === item.id;

                            return (
                                <div
                                    key={item.id}
                                    ref={(el) => {
                                        itemRefs.current[item.id] = el;
                                    }}
                                    className="overflow-hidden rounded-2xl border border-principal/30"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setOpenItem(isOpen ? null : item.id)}
                                        className="flex w-full items-center justify-between px-5 py-4 text-left"
                                    >
                                        <span className="font-serif text-lg text-neutral-900">
                                            {item.title}
                                        </span>
                                        <ChevronDown
                                            size={20}
                                            className={`shrink-0 text-principal transition-transform ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="border-t border-principal/20 px-5 py-5">
                                                {item.heading && (
                                                    <p className="font-serif text-base text-neutral-900">
                                                        {item.heading}
                                                    </p>
                                                )}

                                                {item.intro.map((paragraph) => (
                                                    <p
                                                        key={paragraph}
                                                        className="mt-3 text-sm leading-relaxed text-neutral-700"
                                                    >
                                                        {paragraph}
                                                    </p>
                                                ))}

                                                {item.lists.map((list) => (
                                                    <div key={list.label} className="mt-4">
                                                        <p className="text-sm font-semibold text-neutral-900">
                                                            {list.label}
                                                        </p>
                                                        <ul className="mt-2 flex flex-col gap-1">
                                                            {list.items.map((li) => (
                                                                <li
                                                                    key={li}
                                                                    className="text-sm text-neutral-700"
                                                                >
                                                                    • {li}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
