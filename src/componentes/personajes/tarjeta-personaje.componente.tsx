import { FC }  from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mostrarDetallesPersonaje } from "../../actions/personajes.actions";
import Personaje from "../../types/personaje.types";
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * @param {personaje} props Props con la información de cada personaje mapeado en la grilla
 * @returns un JSX element 
 */

const TarjetaPersonaje: FC<Personaje> = (personaje: Personaje) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mostrarDetalles = () => {
        dispatch(mostrarDetallesPersonaje(personaje));
        navigate("/detalle");
    }

    return <div className="tarjeta-personaje">
        <img src={personaje.image} alt={personaje.name} onClick={mostrarDetalles}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito {...personaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;