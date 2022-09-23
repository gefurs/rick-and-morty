import { FC } from "react";
import TarjetaPersonaje from './tarjeta-personaje.componente';
import Personaje from "../../types/personaje.types";

import './grilla-personajes.css';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * @param {personajes} props Props con el listado de personajes que viene de la página de inicio o de la página de favoritos
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