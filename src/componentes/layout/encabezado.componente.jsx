import {Link} from "react-router-dom";
import logo from "../../images/logo.png";
import './encabezado.css';

/**
 * Componente que contiene los links para navegar entre las páginas
 *
 * Uso: `<Encabezado />`
 *
 * @returns Un elemento JSX
 */
const Encabezado = () => {

    return <header>
            <div>
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado;