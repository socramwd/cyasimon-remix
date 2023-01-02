
import { useLoaderData } from "@remix-run/react";
import { getServicio } from "~/models/servicios.server";
import styles from "../../styles/galeria.css";
import Fotos from "~/components/fotos";

export async function loader({params}) {
    const { servicioUrl } = params;
    const servicio = await getServicio(servicioUrl);

    if(servicio.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Servicio No Encontrado'
        })
    }

    return servicio
}

export function meta({data}) {
    if(!data) {
        return {
            title: 'CYA Simón - Servicio No Encontrado',
            description: 'Cristalería, Aluminio, nuestros servicios, Servicio no encontrado'
        }
    }

	return {
		title: `CYA Simón - ${data.data[0].attributes.nombre}`,
		description: `Cristalería, Aluminio, nuestros servicios, Servicio ${data.data[0].attributes.nombre}`
	}
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

function Servicio() {
    const servicio = useLoaderData();
    const galeria = servicio.data[0].attributes.galeria.data;

    return (
        <main className="contenedor galeria">
            <h1 className="heading">{servicio.data[0].attributes.nombre}</h1>
            {galeria?.length && (
                <div className="galeria-grid">
                    {galeria.map( fotos => (
                        <Fotos
                            key={galeria?.id}
                            fotos={fotos?.attributes}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}

export default Servicio