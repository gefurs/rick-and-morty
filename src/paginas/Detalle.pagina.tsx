// import { useEffect } from "react";
// import { buscarCapituloThunk } from "../actions/capitulos.actions";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../store/store";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";

import "./Detalle.css";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {

    // const dispatch = useDispatch();
    // dispatch(buscarCapituloThunk(id));

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const personaje = useSelector(state => state.personajes.personaje);
    // console.log(personaje.episode);

    // const capitulo = useSelector(state => state.capitulo.capitulo);
    // console.log(capitulo)

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
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {personaje.episode.map((episode, index) => {
                return <TarjetaEpisodio key={index} capitulo={episode} />
            })}
        </div>
    </div>
}

export default PaginaDetalle;