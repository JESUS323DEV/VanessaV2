import { useState } from "react";
import { List, X } from "lucide-react";

import logo from "../../assets/logo1.1.png";
import bgHeader from "../../assets/bg-header.png";

const NAV_LINKS = [
    { href: "/#hero", label: "Inicio" },
    { href: "/#aboutMe", label: "Sobre mí" },
    { href: "/#services", label: "Mis servicios" },
    { href: "/#contact", label: "Contacto" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header
            className="fixed inset-x-0 top-0 z-50 bg-white bg-cover bg-center shadow-sm"
            style={{ backgroundImage: `url(${bgHeader})` }}
        >
            <nav className="flex items-center justify-between px-6 py-4 sm:px-10 md:px-12 lg:px-16">
                <a href="/#hero" className="shrink-0">
                    <img
                        src={logo}
                        alt="Vanessa - Psicóloga y Psicopedagoga"
                        className="h-9 w-auto sm:h-11 md:h-12 lg:h-14"
                    />
                </a>

                <button
                    type="button"
                    onClick={() => setOpen(true)}
                    className="text-neutral-800 md:hidden"
                    aria-label="Abrir menú"
                >
                    <List size={28} />
                </button>

                <ul className="hidden items-center gap-10 text-sm font-medium text-neutral-800 md:flex lg:gap-12 lg:text-base">
                    {NAV_LINKS.map((link, index) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`border-b pb-1 transition-colors hover:text-neutral-900 ${
                                    index === 0
                                        ? "border-principal text-neutral-900"
                                        : "border-transparent"
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div
                className={`fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-sm transition-transform duration-300 md:hidden ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-end px-6 py-4">
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="text-neutral-800"
                        aria-label="Cerrar menú"
                    >
                        <X size={28} />
                    </button>
                </div>

                <ul className="mt-10 flex flex-col items-center gap-8 text-lg font-medium text-neutral-800">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
