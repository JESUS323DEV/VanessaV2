// 👉 ESTE ES EL ÚNICO COMPONENTE NUEVO (no inventa nada, solo envuelve)
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function ScrollHandler() {
    const { pathname } = useLocation();
    const hasScrolled = useRef(false);

    useEffect(() => {
        if (pathname === "/aboutMe" && !hasScrolled.current) {
            setTimeout(() => {
                document.getElementById("aboutMe")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
                hasScrolled.current = true;
            }, 100);
        }
    }, [pathname]);

    return null;

}