
import logo from "../../assets/logo-footer.png"


export default function Footer() {

    return (
        <>

            <footer>
                <div className="cont-footer">
                    <div className="contenido-footer">

                        <div className="img-foot">
                            <img src={logo} alt="Logo Footer" />
                            <small>Atención infanto-juvenil personalizada.</small>


                        </div>

                        <div className="body-footer">

                            <div className="contacto-foot">
                                <h4>Contacto</h4>
                                <a href="mailto:vmedina.psico@gmail.com">vmedina.psico@gmail.com</a>
                                <a href="tel:+34727760812">+34 72 77 60 812</a>
                            </div>

                            <div className="legal-foot">
                                <h4>Legal</h4>
                                <a href="#">Política de privacidad</a>
                                <a href="#">Aviso legal</a>
                            </div>
                        </div>
                        <small className="reservados">© 2026 - Todos los derechos reservados</small>

                    </div>
                </div>
            </footer>
        </>
    )
}