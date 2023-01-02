
import fijo from "../../public/img/fijo.png";
import movil from "../../public/img/movil.png";
import email from "../../public/img/email.png";
import facebook from "../../public/img/facebook.png"
import instagram from "../../public/img/instagram.png"

function Info() {
    return (
        <div className="info">
            <h2 className="heading">Cristalería y Aluminio Simón</h2>

            <div className="direccion">
                <p>Calle Regla Sanz 39</p>
                <p>CP41010 - Sevilla</p>
                <a href="https://goo.gl/maps/JkDroN3UnnD7DEb96">Ver en Google Maps</a>
            </div>

            <div className="telefono">
                <div className="fijo">
                    <img className="icono" src={fijo} alt="imagen telefono fijo" />
                    <p className="texto">954338080</p>
                </div>

                <div className="movil">
                    <img className="icono" src={movil} alt="imagen telefono movil" />
                    <p className="texto">609467632</p>
                </div>
            </div>

            <div className="email">
                <img className="icono" src={email} alt="imagen correo electronico" />
                <p className="texto">cristaleriasimon@hotmail.com</p>
            </div>

            <div className="rrss">
                <a href="https://www.facebook.com/cristaleriayaluminiosimon" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="imagen facebook"/>
                </a>
            
                <a href="https://www.instagram.com/explore/locations/322589611235040/cristaleria-y-aluminios-simon/" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="imagen instagram"/>
                </a>

                <p className="texto">Síguenos!</p>
            </div>
        </div>
    )
}

export default Info