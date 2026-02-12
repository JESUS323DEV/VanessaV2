import { useState } from "react";
import logo from "../../assets/logo-footer.png"

import Modal from "../../components/Modal"


export default function Footer() {

    const [activeModal, setActiveModal] = useState(null);


    return (
        <>

            <footer>
                <div className="cont-footer">
                    <div className="contenido-footer">

                        <div className="img-foot">
                            <img src={logo} alt="Logo Footer" />
                            <small>Atención infanto-juvenil personalizada.</small>


                        </div>

                        <div className="body-footer">

                            <div className="contacto-foot">
                                <h4>Contacto</h4>
                                <a href="mailto:vmedina.psico@gmail.com">vmedina.psico@gmail.com</a>
                                <a href="tel:+34727760812">+34 72 77 60 812</a>
                            </div>

                            <div className="legal-foot">
                                <h4>Legal</h4>

                                <button onClick={() => setActiveModal("privacy")}>
                                    Política de Privacidad
                                </button>

                                <button onClick={() => setActiveModal("legal")}>
                                    Aviso Legal
                                </button>


                                {activeModal === "privacy" && (
                                    <Modal
                                        title="Privacidad"
                                        content={
                                            <>

                                                <p>
                                                    En esta página web no se recopilan ni almacenan datos personales de los usuarios.
                                                </p>


                                                <p>
                                                    Los medios de contacto disponibles en esta página incluyen teléfono, correo electrónico y enlace directo a WhatsApp. Al utilizar cualquiera de estos medios, el usuario proporciona sus datos de forma voluntaria con la única finalidad de establecer comunicación profesional.
                                                </p>

                                                <p>
                                                    En el caso del enlace a WhatsApp, el usuario abandona esta página y pasa a interactuar directamente con la plataforma de WhatsApp, la cual dispone de su propia política de privacidad y tratamiento de datos. Lo mismo ocurre si el contacto se realiza a través de servicios externos como LinkedIn.
                                                </p>

                                                <p>
                                                    Este sitio web no almacena información en bases de datos propias, no crea perfiles de usuario y no realiza seguimiento personalizado.
                                                    No se utilizan formularios internos, sistemas de registro ni mecanismos de almacenamiento de datos personales.
                                                </p>

                                                <p>
                                                    En caso de futuras actualizaciones que impliquen la recogida de información, esta política será modificada para reflejar dichos cambios de forma transparente.

                                                </p>
                                                <p>
                                                    Para cualquier duda relacionada con la privacidad, puede ponerse en contacto a través de los medios indicados en esta página.
                                                </p>

                                            </>
                                        }
                                        onClose={() => setActiveModal(null)}
                                    />
                                )}

                                {activeModal === "legal" && (
                                    <Modal
                                        title="Aviso Legal"
                                        content={
                                            <>
                                                <p>En cumplimiento de lo dispuesto en la normativa vigente,
                                                    se informa que el presente sitio web tiene carácter meramente informativo.
                                                </p>

                                                <h3>Identificación del titular</h3>
                                                <p>
                                                    Nombre completo: Vanessa A. Media Valdez<br />
                                                    NIF: 49492967A<br />
                                                    Domicilio profesional: Barcelona, Barcelona, España<br />
                                                    Correo electrónico: vmedina.psico@gmail.com<br />
                                                    Teléfono: +34 72 77 60 812<br />
                                                    Actividad: Servicios de psicopedagogía como profesional autónoma.
                                                </p>


                                                <h3>Titular del sitio web</h3>
                                                <p>
                                                    El titular de esta página es el responsable de los contenidos publicados en la misma.
                                                    Para cualquier consulta, puede utilizar los medios de contacto indicados en esta web.
                                                </p>

                                                <h3>Objeto</h3>
                                                <p>
                                                    El presente sitio web tiene como finalidad ofrecer información sobre los servicios y actividades desarrolladas por el titular.
                                                    El acceso y navegación por este sitio implica la aceptación de las condiciones aquí descritas.
                                                </p>

                                                <h3>Propiedad intelectual</h3>
                                                <p>
                                                    Todos los contenidos de esta web, incluyendo textos, imágenes, diseño y código,
                                                    están protegidos por los derechos de propiedad intelectual e industrial.
                                                </p>

                                                <h3>Responsabilidad</h3>
                                                <p>
                                                    El titular no se hace responsable del mal uso que puedan realizar los usuarios de los contenidos de esta web.
                                                    Tampoco se garantiza la ausencia de errores técnicos, aunque se adoptarán las medidas necesarias para corregirlos en caso de detectarse.
                                                </p>

                                                <h3>Enlaces externos</h3>
                                                <p>
                                                    Este sitio puede contener enlaces a plataformas externas (como WhatsApp). El titular no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios externos.
                                                </p>
                                            </>
                                        }
                                        onClose={() => setActiveModal(null)}

                                    />
                                )}


                            </div>
                        </div>
                        <small className="reservados">© 2026 - Todos los derechos reservados</small>

                    </div>
                </div>
            </footer>
        </>
    )
}