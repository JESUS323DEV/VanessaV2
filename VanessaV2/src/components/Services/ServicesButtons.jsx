import { useState } from "react";


import { UserSearch, HandHeart, } from "lucide-react";

export default function servicesButtons() {
    
    //BTN SERVICIOS
    const [iconOpen, setIconOpen] = useState("evaluacion"); // el primero abierto
    const openService = (id) => {
        setIconOpen(id);
    };



    return (
        <>


            <div className="cont-servicios">


                <div className="cont-icon">
                    <h4>Evaluación e intervención especializada</h4>
                    <div className="btn-icon">
                        <button className={iconOpen === "evaluacion" ? "btn-servicio active" : "btn-servicio"}
                            onClick={() =>
                                openService("evaluacion")}>
                            <UserSearch /> Evaluación
                        </button>

                        <button className={iconOpen === "intervencion" ? "btn-servicio active" : "btn-servicio"}
                            onClick={() => openService("intervencion")}>
                            <HandHeart /> Intervención
                        </button>
                    </div>


                    {iconOpen === "evaluacion" && (
                        <div className="contenido-elevation">
                            <h3>Orientación diagnóstica</h3>
                            <p>Realizo una valoración completa para identificar dificultades específicas del aprendizaje y necesidades educativas en niños y adolescentes, especialmente en casos de TEA, TDAH y Dislexia. A través de pruebas estandarizadas, entrevistas y observación, elaboro un informe detallado con recomendaciones claras para familias y centros educativos.</p>
                        </div>

                    )}


                    {iconOpen === "intervencion" && (
                        <div className="cont-intervencion">
                            <h3>Intervención y apoyo educativo </h3>
                            <p>Trabajo mediante metodologías adaptadas a las características de cada perfil, favoreciendo la autonomía del estudiante en sus diferentes contextos sociales y de aprendizaje. La intervención se diseña de forma individualizada, teniendo en cuenta sus fortalezas, necesidades y ritmo de desarrollo, con el objetivo de potenciar habilidades</p>
                        </div>
                    )}
                </div>

            </div>


        </>
    )
}