
import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helper";

export default function Post({post}) {
    const { titulo, contenido, fecha, categoria, url, imagen } = post;
    const fechaFormat = formatearFecha(fecha);

    return (
        <Link className="post-card" to={`/post/${url}`}>
            <div className="post-card_image">
                <img src={imagen.data.attributes.url} alt={`imagen ${titulo}`}/>
            </div>
            <div className="title">
                <h3>{titulo}</h3>
            </div>
            <div className="texto">
                <p className="resumen">{contenido}</p>
            </div>
            <div className="separador"></div>
            <div className="info">
                <button className="boton">{categoria}</button>
                <p className="fecha">{fechaFormat}</p>
            </div>
        </Link>
    )
}
    


  