import { Link } from "@remix-run/react"

function Servicio({servicio}) {
    const { nombre, url, imagen } = servicio;

    return (
        <Link className="card" to={`/galeria/${url}`}>
            <div className="card-image">
                <img src={imagen.data.attributes.url} alt={`imagen ${nombre}`}/>
            </div>
            <div className="card-title">
                <h3>{nombre}</h3>
            </div>
        </Link>
    )
}

export default Servicio