import { Link } from "@remix-run/react"
import facebook from "../../public/img/facebook.png"
import instagram from "../../public/img/instagram.png"
import logo from "../../public/img/logo_simon.png"
import Navegacion from "./navegacion"

function Header() {
    return (
        <header className="header">
            <div className="contenedor barra">
                <div className="rrss">
                    <a href="https://www.facebook.com/cristaleriayaluminiosimon" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="imagen facebook"/>
                    </a>
                    <a href="https://www.instagram.com/explore/locations/322589611235040/cristaleria-y-aluminios-simon/" target="_blank" rel="noreferrer">
                        <img src={instagram} alt="imagen instagram"/>
                    </a>
                </div>

                <Link to="/" className="logo">
                    <img src={logo} alt="imagen logo simon"/>
                </Link>

                <Navegacion className="header_nav"/>
            </div>
        </header>
    )
}

export default Header