export default function ScrollSections(id) {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
    });
}