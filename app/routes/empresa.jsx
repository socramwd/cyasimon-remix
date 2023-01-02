import styles from "~/styles/empresa.css";

export function meta() {
    return {
        title: "CYA Simón - Empresa",
        description: "Cristalería, Aluminio, nuestra empresa"
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

function Empresa() {
    return (
        <>
            <div className="cabecera">
                <h1>Empresa</h1>
            </div>

            <main className="contenedor empresa">
                <div className="title">
                    <h2>SINCE 1982</h2>
                    <p>Cristalería y Aluminio Simón es una empresa trianera con más de 40 años de historia. Una experiencia que nos convierte en líderes del sector sevillano gracias a nuestra calidad e innovación.</p>
                    <p>Una empresa fundada en los terrenos trianeros del antiguo Tejar del Moro dedicada al acristalamiento y a la carpintería de aluminio.</p>
                </div>
                
                <div className="valores">
                    <h3>Valores</h3>
                    <p>Tenemos una filosofía clara: la satisfacción de nuestros clientes.</p>
                    <p>Somos expertos en la fabricación y montaje de cualquier producto relacionado con el aluminio y cristalería con un objetivo principal: cumplir la demanda en cuanto a diseño, confort y seguridad.</p>
                </div>
                
                <div className="trabajo">
                    <h3>Cómo trabajamos</h3>
                    <p>Tenemos una filosofía clara: la satisfacción de nuestros clientes.</p>
                    <p>Somos expertos en la fabricación y montaje de cualquier producto relacionado con el aluminio y cristalería con un objetivo principal: cumplir la demanda en cuanto a diseño, confort y seguridad.</p>
                </div>
            </main>
        </>
    )
}

export default Empresa