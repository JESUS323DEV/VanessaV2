// Este formulario recoge los datos básicos del usuario
// (nombre del padre/madre, nombre del niño, motivo de consulta y mensaje opcional)
// y genera automáticamente un mensaje para WhatsApp.

// Los datos se guardan en estado mientras el usuario escribe.
// No se envía nada automáticamente: el usuario siempre confirma el envío desde WhatsApp.

// Al enviar el formulario:
// 1. Se construye un texto con los datos introducidos.
// 2. El texto se codifica para que funcione correctamente en una URL.
// 3. Se genera un enlace dinámico de WhatsApp (wa.me).
// 4. Se abre WhatsApp en una nueva pestaña con el mensaje ya escrito.

// El formulario no usa backend ni base de datos.
// Es una solución simple, directa y orientada a conversión,
// ideal para contacto rápido sin fricción.




import { useState } from "react";

import emailImg from "../../assets/email.png";
import Linkedin from "../../assets/linkedin.png";
import phone from "../../assets/llamar2.png";

export default function Form() {

    const [parentName, setParentName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

    const phoneNumber = "34695078648"; // número con prefijo

    // Solo letras y espacios
    const onlyLetters = (value) => {
        return value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let text = `🧠 *Contacto – Vanessa Psicopedagoga*\n\n`;
        text += `👤 *Tutor/a:* ${parentName}\n`;
        text += `📧 *Email:* ${email}\n`;
        text += `📌 *Motivo de consulta:* ${reason}\n`;

        if (message.trim() !== "") {
            text += `\n📝 *Mensaje adicional:*\n${message}\n`;
        }

        text += `\n✅ *Mensaje enviado desde la web*`;

        const encodedText = encodeURIComponent(text);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappLink, "_blank");
    };

    return (

        <>
            <form onSubmit={handleSubmit}>
                <h2>Contacto</h2>

                <div className="contact-form">
                    <div className="form-group">
                        <p>A través de este formulario puedes solicitar información o realizar una primera consulta sin compromiso.</p>

                        <label>Nombre del tutor/a</label>
                        <input
                            type="text"
                            placeholder="Nombre y apellidos"
                            value={parentName}
                            onChange={(e) =>
                                setParentName(onlyLetters(e.target.value))
                            }
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="ejemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>


                    <div className="form-group">
                        <label>Motivo de consulta</label>
                        <select
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="TDAH">TDAH</option>
                            <option value="TEA">TEA</option>
                            <option value="Dislexia">Dislexia</option>
                            <option value="Orientación familiar">Orientación familiar</option>
                            <option value="Colaboración con centros">Colaboración con centros</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Mensaje (opcional)</label>
                        <textarea
                            value={message}
                            placeholder="Cuéntanos brevemente tu caso (opcional)"
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-submit">
                            Enviar por WhatsApp
                        </button>
                    </div>

                    <div className="reserva-extra">
                        <h5>Si lo prefieres, también puedes contactar directamente por teléfono, correo electrónico o LinkedIn.</h5>
                        <div className="links-reserva-extra">
                            <a
                                href="tel:+34727760812"
                                className="btn-reserva">
                                <img src={phone} alt="Phone" />
                            </a>

                            <a
                                href="mailto:vmedina.psico@gmail.com"
                                className="btn-reserva">
                                <img src={emailImg} alt="Email" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vanessa-atenas-medina-valdez?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                                target="_blank"
                                className="btn-reserva">
                                <img src={Linkedin} alt="linkedIn" />

                            </a>

                        </div>
                        <div>
                        </div>

                    </div>
                </div>
            </form>
        </>
    );
}
