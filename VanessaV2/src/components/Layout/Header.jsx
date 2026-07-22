import { useEffect, useState } from "react";
import { List, X } from "lucide-react";

import logo from "../../assets/logo1.1.png";
import bgHeader from "../../assets/bg-header.png";

const NAV_LINKS = [
    { href: "/#hero", label: "Inicio" },
    { href: "/#aboutMe", label: "Sobre mí" },
    { href: "/#services", label: "Mis servicios" },
    { href: "/#contact", label: "Contacto" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.href.replace("/#", ""));

export default function Header() {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);

    useEffect(() => {
        const sections = SECTION_IDS
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-45% 0px -45% 0px" }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

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
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.replace("/#", "");

                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`border-b pb-1 transition-colors hover:text-neutral-900 ${
                                        isActive
                                            ? "border-principal text-neutral-900"
                                            : "border-transparent"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div
                className={`fixed inset-0 z-50 flex flex-col bg-white bg-cover bg-center transition-transform duration-300 md:hidden ${
                    open ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ backgroundImage: `url(${bgHeader})` }}
            >
                <div className="flex items-center justify-between px-6 py-4">
                    <img src={logo} alt="Vanessa - Psicóloga y Psicopedagoga" className="h-9 w-auto" />

                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-principal/40 text-neutral-800"
                        aria-label="Cerrar menú"
                    >
                        <X size={22} />
                    </button>
                </div>

                <ul className="mt-16 flex flex-col items-center gap-2 font-serif text-2xl text-neutral-900">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.replace("/#", "");

                        return (
                            <li key={link.href} className="w-full max-w-xs">
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`flex justify-center border-b py-4 transition-colors ${
                                        isActive
                                            ? "border-principal text-principal"
                                            : "border-neutral-900/10 hover:text-principal"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
}
