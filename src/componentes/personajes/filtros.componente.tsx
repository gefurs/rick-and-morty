import { FC } from "react";

import './filtros.css';

/**
 * Input para filtrar los personajes por nombre
 * 
 * @param {name} props Props con el estado local que viene de la página de inicio
 * @param {setName} props Props con la función modificadora del nombre que viene de la página de inicio
 * 
 * @returns un JSX element 
 */

type FiltrosType = {
    setName: React.Dispatch<React.SetStateAction<string>>
    name: string
}

const Filtros: FC<FiltrosType> = ({ name, setName }) => {

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" onChange={(e)=>  setName(e.target.value)}
        placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" autoFocus={true} 
        value={name}/>
    </div>
}

export default Filtros;