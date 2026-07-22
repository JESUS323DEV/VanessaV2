import { HeartHandshake, MessageCircle } from "lucide-react";

import heroImg from "../assets/dibujo2.jpg";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative scroll-mt-8 md:scroll-mt-15 bg-cover bg-[center_65%] xl:bg-[top] "
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10  min-h-[100svh] md:min-h-[85svh] lg:min-h-[75svh] xl:min-h-[100svh] flex flex-col justify-center gap-[3rem] pt-24 lg:pb-16 lg:items-start lg:pl-15 xl:pl-[10rem] 2xl:pl-[20rem]">
                <div className="flex flex-col mt-15 lg:mt-0 2xl:mt-30 gap-5 p-2 lg:max-w-2xl xl:max-w-4xl ">

                    <h1 className="font-serif text-center lg:text-left font-bold text-principal text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] leading-tight drop-shadow-lg
                   
                    ">
                        Comprender,
                        <br />
                        acompañar y
                        <br />
                        potenciar
                    </h1>


                    <div className="text-white/90 text-[1.2rem] lg:text-[1.8rem]  text-center lg:text-left">
                        <p>
                            Atención infanto-juvenil personalizada.
                        </p>

                        <p>
                            Un apoyo en cada pequeño paso.
                        </p>
                    </div>

                </div>
                <div className="flex justify-center items-center  lg:mx-2 gap-5">
                    <a
                        href="/#aboutMe"
                        className="bg-principal p-3 rounded-md flex items-center gap-2 text-neutral-900 hover:brightness-95"
                    >
                        <HeartHandshake size={18} />
                        Más información
                    </a>
                    <a
                        href="/#contact"
                        className="border p-3 flex items-center rounded-md border-white/70 gap-2 text-white hover:bg-white/10"
                    >
                        <MessageCircle size={18} />
                        Contacto
                    </a>
                </div>

            </div>
        </section>
    );
}
