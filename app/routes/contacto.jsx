
import styles from "~/styles/contacto.css";
import Info from "~/components/info";
import Formulario from "~/components/formulario";

export function meta() {
    return {
        title: "CYA Simón - Contacto",
        description: "Cristalería, Aluminio, contacta con nosotros"
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

function Contacto() {
    return (
        <>
            <div className="cabecera">
                <h1>Contacto</h1>
            </div>

            <div className="contenedor cont-contacto">
                <Info/>
                <Formulario/>
            </div>
        </>
    )
}

export default Contacto