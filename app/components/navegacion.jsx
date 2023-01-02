
import { Link, useLocation } from "@remix-run/react";
import { useState } from "react";

function Navegacion() {
    const location = useLocation();

    const [ ham, setHam] = useState(true);
    const cerrar = () => {
        setHam( setHam => !setHam)
    }

    return (
        <>
            <span className="ham" onClick={cerrar}>
                { ham ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0246ff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="10" y1="12" x2="20" y2="12" />
                    <line x1="6" y1="18" x2="20" y2="18" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#0246ff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) }
            </span>

            <nav className={`navegacion ${ham ? '' : "abajo"}`}>
                <Link onClick={cerrar} to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
                <Link onClick={cerrar} to="/empresa" className={location.pathname === "/empresa" ? "active" : ""}>Empresa</Link>
                <Link onClick={cerrar} to="/servicios" className={location.pathname === "/servicios" ? "active" : ""}>Servicios</Link>
                <Link onClick={cerrar} to="/galeria-index" className={location.pathname === "/galeria" ? "active" : ""}>Galería</Link>
                <Link onClick={cerrar} to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog</Link>
                <Link onClick={cerrar} to="/contacto" className={location.pathname === "/contacto" ? "active" : ""}>Contacto</Link>
            </nav>
        </>
    )
}

export default Navegacion