

function Formulario() {
    return (
        <div className="contacto">
            <h2 className="heading">Formulario de Contacto</h2>

            <div className="formulario">
                <div className="campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Tu nombre"
                        name="nombre"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Tu email"
                        name="email"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="telefono">Teléfono</label>
                    <input
                        id="telefono"
                        type="tel"
                        placeholder="Tu telefono"
                        name="telefono"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        as="textarea"
                        id="mensaje"
                        type="text"
                        placeholder="Tu mensaje"
                        name="mensaje"
                        wrap="hard"
                    />
                </div>

                <input type="submit" value="Enviar mensaje" className="boton"/>
            </div>
        </div>
    )
}

export default Formulario