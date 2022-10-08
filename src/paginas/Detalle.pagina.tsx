import { useState, useEffect } from "react";
import { buscarCapituloAPI } from "../services/capitulos.services";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../store/store";
import Capitulo from "../types/capitulo.type";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

import "./Detalle.css";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    const [capitulos, setCapitulos] = useState<Capitulo[]>([]);

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const personaje = useSelector(state => state.personajes.personaje);
    const endpoints = personaje.episode;

    const obtenerCapitulos = async (urlsArray: string[]): Promise<Capitulo[]> => {
        const promesas = urlsArray.map(async (url: string) => await buscarCapituloAPI(url)
        .then(
            (response: Capitulo) => response
        ))
        const capitulos = await Promise.all(promesas).then((response: Capitulo[]) => response)
        setCapitulos(capitulos);
        return capitulos;
    }

    useEffect(() => {
        obtenerCapitulos(endpoints);
    }, [endpoints]);

    console.log(capitulos)

    const volver = () => {
        window.history.back();
    }

    return <div className="container">
        <h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
            <img src={personaje.image} alt={personaje.name}/>
                <div className={"detalle-header-texto"}>
                <p>{personaje.name}</p>
                <p>Planeta: {personaje.location.name}</p>
                <p>Genero: {personaje.gender}</p>
                </div>
                <BotonFavorito {...personaje} />
                
            </div>
            <div className={"button-container"}>
                <button onClick={volver} className={"primary"} >Volver</button>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje:</h4>
        <div className={"episodios-grilla"}>
            {capitulos.map((capitulo) => {
                return <TarjetaEpisodio key={capitulo.id} capitulo={capitulo} />
            })}
        </div>
    </div>
}

export default PaginaDetalle;