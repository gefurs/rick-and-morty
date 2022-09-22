import { FC } from "react";
import { useDispatch } from "react-redux";
import { mostrarDetallesPersonaje } from "../../actions/personajes.actions";
import TarjetaPersonaje from './tarjeta-personaje.componente';
import Personaje from "../../types/personaje.types";


import './grilla-personajes.css';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * @returns un JSX element 
 */

type GrillaPersonajesType = {
    personajes: Personaje[]
}

const GrillaPersonajes: FC<GrillaPersonajesType> = ({ personajes }) => {
    return <div className="grilla-personajes">
        {personajes.map((personaje: Personaje) => {
            return <TarjetaPersonaje key={personaje.id} {...personaje} />
        })}
    </div>
}

export default GrillaPersonajes;