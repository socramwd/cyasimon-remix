
import { useLoaderData } from "@remix-run/react";
import { getServicios } from "~/models/servicios.server";
import Servicio from "~/components/servicio";
import stylesOnlyIndex from "~/styles/only-index.css";
import stylesServicios from "~/styles/servicios.css";
import { Link } from "react-router-dom";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesOnlyIndex
        },
        {
            rel: "stylesheet",
            href: stylesServicios
        }
    ]
}

export async function loader() {
    const servicios = await getServicios();
    return servicios.data;
}

function Index() {
    const servicios = useLoaderData();

    return (
        <main className="contenedor">
            <div className="empresa">
                <h2 className="heading">Nuestra Empresa</h2>
                <p>Cristalería y Aluminio Simón es una empresa trianera con más de 40 años de historia. Una experiencia que nos convierte en líderes del sector sevillano gracias a nuestra calidad e innovación.</p>
            </div>
            
            <div className="servicios">
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

                <h2 className="heading">Nuestros Servicios</h2>
            </div>

            <div className="presupuesto">
                <Link to="./contacto">Pídenos presupuesto</Link>
            </div>
        </main>
    )
}

export default Index