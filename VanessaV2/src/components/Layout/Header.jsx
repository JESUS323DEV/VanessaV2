import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo1.1.png"
import bgNav from "../../assets/bg-header.png"

import { List, X, } from "lucide-react";


import ScrollSections from "../../components/ScrollSections";

export default function Header() {

    //MENU BURGER
    const [openMenu, setOpenMenu] = useState(false);
    return (

        <>

            {/*=================HEADER=================*/}
            <header>
                <nav>

                    <div className='bgNav' style={{ backgroundImage: `url(${bgNav})` }}>
                        <div className='nav-menu'>
                            <div className={openMenu ? "header header--menu" : "header"}>
                                <img className={openMenu ? "logo--menu" : "logo"} src={logo} />
                            </div>

                            <button
                                className={openMenu ? "btn-menu hidden" : "btn-menu"}
                                onClick={() => setOpenMenu(true)

                                }
                            >
                                <List />
                            </button>





                            <div className={`menu ${openMenu ? "open" : "closed"}`}>
                                <div className="list-nav" style={{ backgroundImage: `url(${bgNav})` }}>

                                    <button
                                        className={openMenu ? "btn-close" : "btn-close hidden"}
                                        onClick={() => setOpenMenu(false)}
                                    >
                                        <X className="closeMenu" />
                                    </button>


                                    <ul>
                                        <li>
                                            <Link to="/"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    ScrollSections("hero");
                                                }}>

                                                Inicio
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/sobre-mi"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    ScrollSections("aboutMe");
                                                }}>

                                                Sobre mí
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/servicios"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    ScrollSections("services");
                                                }}>
                                                Mis servicios
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contacto"
                                                onClick={() => {
                                                    setOpenMenu(false);
                                                    ScrollSections("contact");
                                                }}>
                                                Contacto
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );

}


