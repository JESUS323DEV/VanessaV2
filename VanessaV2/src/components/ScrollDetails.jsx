import { useEffect } from "react";

export default function ScrollDetails(detailsRefs) {
    useEffect(() => {
        const details = detailsRefs.current;
        const cleanups = [];

        details.forEach(det => {
            if (!det) return;

            const onClick = () => {
                details.forEach(other => {
                    if (other && other !== det) {
                        other.open = false;
                        delete other.dataset.scrolled;
                    }
                });
            };

            const onToggle = () => {
                if (det.open && !det.dataset.scrolled) {
                    requestAnimationFrame(() => {
                        const header = document.querySelector(".nav-menu");
                        const offset = header ? header.offsetHeight : 0;
                        const EXTRA_GAP = -10;

                        const y =
                            det.getBoundingClientRect().top +
                            window.pageYOffset -
                            offset +
                            EXTRA_GAP;

                        window.scrollTo({ top: y, behavior: "smooth" });
                        det.dataset.scrolled = "true";
                    });
                }

                if (!det.open) {
                    delete det.dataset.scrolled;
                }
            };

            det.querySelector("summary")?.addEventListener("click", onClick);
            det.addEventListener("toggle", onToggle);

            cleanups.push(() => {
                det.querySelector("summary")?.removeEventListener("click", onClick);
                det.removeEventListener("toggle", onToggle);
            });
        });

        return () => {
            cleanups.forEach(fn => fn());
        };
    }, [detailsRefs]);
}
