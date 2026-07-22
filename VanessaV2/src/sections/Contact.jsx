import { useState } from "react";
import { Send, Phone, Mail, Linkedin } from "lucide-react";

import bgSection from "../assets/bg-header.png";

const PHONE_NUMBER = "34727760812";

const onlyLetters = (value) => value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");

const inputClass =
    "w-full rounded-xl border border-principal/40 bg-white px-4 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-principal";

export default function Contact() {
    const [parentName, setParentName] = useState("");
    const [email, setEmail] = useState("");
    const [reason, setReason] = useState("");
    const [message, setMessage] = useState("");

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
        const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodedText}`;

        window.open(whatsappLink, "_blank");
    };

    return (
        <section
            id="contact"
            className="bg-white bg-cover bg-center px-6 py-16 sm:px-10"
            style={{ backgroundImage: `url(${bgSection})` }}
        >
            <div className="text-center">
                <h2 className="font-serif text-4xl text-neutral-900">Contacto</h2>

                <div className="mt-3 flex items-center justify-center gap-3">
                    <span className="h-px w-10 bg-principal" />
                    <span className="h-1.5 w-1.5 rounded-full bg-principal" />
                    <span className="h-px w-10 bg-principal" />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
                <p className="text-sm leading-relaxed text-neutral-700">
                    A través de este formulario puedes solicitar información o
                    realizar una primera consulta sin compromiso.
                </p>

                <div className="mt-5 flex flex-col gap-4">
                    <div>
                        <label className="text-sm font-medium text-neutral-900">
                            Nombre del tutor/a
                        </label>
                        <input
                            type="text"
                            placeholder="Nombre y apellidos"
                            value={parentName}
                            onChange={(e) => setParentName(onlyLetters(e.target.value))}
                            required
                            className={`mt-1.5 ${inputClass}`}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-neutral-900">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            placeholder="ejemplo@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`mt-1.5 ${inputClass}`}
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-neutral-900">
                            Motivo de consulta
                        </label>
                        <select
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                            className={`mt-1.5 ${inputClass}`}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="TDAH">TDAH</option>
                            <option value="TEA">TEA</option>
                            <option value="Dislexia">Dislexia</option>
                            <option value="Orientación familiar">
                                Orientación familiar
                            </option>
                            <option value="Colaboración con centros">
                                Colaboración con centros
                            </option>
                        </select>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-neutral-900">
                            Mensaje (opcional)
                        </label>
                        <textarea
                            value={message}
                            placeholder="Cuéntanos brevemente tu caso (opcional)"
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className={`mt-1.5 ${inputClass}`}
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-principal px-6 py-3 font-medium text-neutral-900 transition hover:brightness-95"
                    >
                        <Send size={18} />
                        Enviar por WhatsApp
                    </button>
                </div>

                <div className="mt-8 text-center">
                    <h5 className="text-sm text-neutral-700">
                        Si lo prefieres, también puedes contactar directamente por
                        teléfono, correo electrónico o LinkedIn.
                    </h5>

                    <div className="mt-4 flex items-center justify-center gap-4">
                        <a
                            href="tel:+34727760812"
                            aria-label="Llamar por teléfono"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-principal/40 text-neutral-800 transition hover:bg-principal/15"
                        >
                            <Phone size={20} />
                        </a>

                        <a
                            href="mailto:vmedina.psico@gmail.com"
                            aria-label="Enviar correo electrónico"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-principal/40 text-neutral-800 transition hover:bg-principal/15"
                        >
                            <Mail size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/vanessa-atenas-medina-valdez?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visitar perfil de LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-principal/40 text-neutral-800 transition hover:bg-principal/15"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </form>

            <div className="mx-auto mt-10 max-w-md">
                <p className="text-center text-sm leading-relaxed text-neutral-700">
                    Atención a domicilio y sesiones online. Desplazamientos por la
                    zona de Barcelona centro.
                </p>

                <div className="mt-4 overflow-hidden rounded-2xl shadow-lg">
                    <iframe
                        title="Mapa orientativo de Barcelona"
                        src="https://www.google.com/maps?q=Barcelona%20centro&z=12&output=embed"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}
