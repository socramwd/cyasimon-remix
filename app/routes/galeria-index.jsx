
import { useLoaderData } from "@remix-run/react";
import { getServicios } from "~/models/servicios.server";
import CompGaleria from "~/components/compGaleria";

import styles from "~/styles/galeria-index.css";

export function meta() {
    return {
        title: "CYA Simón - Galeria",
        description: "Cristalería, Aluminio, nuestra galería de fotos"
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

export async function loader() {
    const servicios = await getServicios();
    return servicios.data;
}

function Galeria() {
    const servicios = useLoaderData();

    return (
        <>
            <div className="cabecera">
                <h1>Galería</h1>
            </div>

            <main className="contenedor galeria">
                {servicios?.length && (
                    <div className="galeria-grid">
                        {servicios.map( servicio => (
                            <CompGaleria
                                key={servicio?.id}
                                servicio={servicio?.attributes}
                            />
                        ))}
                    </div>
                )}
            </main>
        </>
    )
}

export default Galeria