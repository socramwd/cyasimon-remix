import { useLoaderData } from "@remix-run/react";
import { getServicios } from "~/models/servicios.server";
import Servicio from "~/components/servicio";

import styles from "~/styles/servicios.css";

export function meta() {
    return {
        title: "CYA Simón - Servicios",
        description: "Cristalería, Aluminio, nuestros servicios"
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

function Servicios() {
    const servicios = useLoaderData();

    return (
        <>
            <div className="cabecera">
                <h1>Servicios</h1>
            </div>

            <main className="contenedor servicios">
                {servicios?.length && (
                    <div className="servicios-grid">
                        {servicios.map( servicio => (
                            <Servicio
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

export default Servicios