import { Link } from "@remix-run/react";

function CompGaleria({servicio}) {
    const { nombre, url } = servicio;

    return (
        <Link className="content-card" to={`/galeria/${url}`}>
            <div class="wrapper">
                <div class="card">
                    <h3>{nombre}</h3>
                </div>
            </div>

            {/* <div className="card-image">
                <img src={imagen.data.attributes.url} alt={`imagen ${nombre}`}/>
            </div>
            <div className="card-title">
                <h3>{nombre}</h3>
            </div> */}
        </Link>
    )
}

export default CompGaleria