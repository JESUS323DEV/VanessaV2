

export default function Map() {
    const direccion = "Barcelona centro";

    const mapSrc = `https://www.google.com/maps?q=Barcelona%20centro&z=12&output=embed`;


    return (
        <>
            <div className="mapa-section">
                <p>Atención a domicilio y sesiones online. Desplazamientos por la zona de Barcelona centro.</p>
                <div className="mapa-container">
                    <iframe
                        title="Mapa orientativo de Barcelona"
                        src={mapSrc}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        loading="lazy"

                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

