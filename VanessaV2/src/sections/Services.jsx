
import ServicesButtons from "../components/Services/ServicesButtons"
import ServicesDetails from "../components/Services/ServicesDetails"

export default function Services() {

    return (

        <>

            <section id="services">

                <div className="grid-services">
                    <h2>Mis servicios</h2>

                    <ServicesButtons />
                    <ServicesDetails />
                </div>
            </section>



        </>
    )
}