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
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */

const TarjetaPersonaje: FC<Personaje> = (personaje: Personaje) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const mostrarDetalles = () => {
        dispatch(mostrarDetallesPersonaje(personaje));
        navigate("/detalle");
    }

    return <div className="tarjeta-personaje" onClick={mostrarDetalles}>
        <img src={personaje.image} alt={personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.name}</span>
            <BotonFavorito {...personaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;