import { Link } from "react-router-dom";

import logo from "../../assets/logo-footer.png";

const NAV_LINKS = [
    { href: "/#hero", label: "Inicio" },
    { href: "/#aboutMe", label: "Sobre mí" },
    { href: "/#services", label: "Mis servicios" },
    { href: "/#contact", label: "Contacto" },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-900 px-6 py-12 text-white sm:px-10">

            <div className="flex flex-col md:flex-row items-center gap-10 text-center sm:items-start sm:text-left">
                <div className="flex flex-col items-center gap-3 ">
                    <img src={logo} alt="Logo Vanessa" className="h-8 w-auto" />
                    <small className="text-white/60 text-center">
                        Atención infanto-juvenil personalizada.
                    </small>
                </div>

                <nav aria-label="Secciones" className="flex flex-col gap-3 border-2">
                    <h4 className="font-serif text-lg text-principal">Navegación</h4>
                    <span className="flex gap-4 md:flex-col">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-white/70 transition hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                    </span>
                </nav>

                <div className="flex flex-col gap-3">
                    <h4 className="font-serif text-lg text-principal">Contacto</h4>
                    <a
                        href="mailto:vmedina.psico@gmail.com"
                        className="text-sm text-white/70 transition hover:text-white"
                    >
                        vmedina.psico@gmail.com
                    </a>
                    <a
                        href="tel:+34727760812"
                        className="text-sm text-white/70 transition hover:text-white"
                    >
                        +34 72 77 60 812
                    </a>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="font-serif text-lg text-principal">Legal</h4>
                    <span className="flex md:flex-col gap-2">
                        <Link
                            to="/privacidad"
                            className="text-sm text-white/70 transition hover:text-white"
                        >
                            Política de Privacidad
                        </Link>
                        <Link
                            to="/aviso-legal"
                            className="text-sm text-white/70 transition hover:text-white"
                        >
                            Aviso Legal
                        </Link>
                    </span>
                </div>
            </div>

            <small className="mt-10 block text-center text-xs text-white/50">
                © 2026 - Todos los derechos reservados
            </small>
        </footer>
    );
}
