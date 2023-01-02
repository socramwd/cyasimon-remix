import { Link } from "@remix-run/react"
import logo from "../../public/img/logo_simon.png"
import facebook from "../../public/img/facebook.png"
import instagram from "../../public/img/instagram.png"

function Footer() {
    return (
        <div className="footer">
            <div className="contenedor contenido">
                <Link to="/" className="logo">
                    <img src={logo} alt="imagen logo simon"/>
                </Link>

                <div className="datos-empresa">
                    <div className="direccion">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1c59ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                        <p>Calle Regla Sanz 39 | CP41010 Sevilla</p>
                    </div>

                    <div className="telefono">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1c59ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <p>954338080 | 609467632</p>
                    </div>

                    <div className="email">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#1c59ff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                        <p>cristaleriasimon@hotmail.com</p>
                    </div>
                </div>

                <div className="rrss">
                    <a href="https://www.facebook.com/cristaleriayaluminiosimon" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="imagen facebook"/>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/322589611235040/cristaleria-y-aluminios-simon/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="imagen instagram"/>
                    </a>
                </div>

                <div className="design">
                    <div className="copyright">
                        <p>Cristaleria y Aluminio Simón &copy;{new Date().getFullYear()}</p>
                    </div>
                    <div className="legal">
                        <p>Aviso Legal | Política de Cookies</p>
                    </div>
                </div>
            </div>

            <div className="socram">
                <p>Socram Web Design</p>
            </div>
        </div>
    )
}

export default Footer