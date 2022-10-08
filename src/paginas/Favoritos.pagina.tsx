import { FC } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../store/store";
import { limpiarFavoritos } from "../actions/personajes.actions";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos: FC = () => {

    const dispatch = useDispatch();

    const limpiarListaFavoritos = () => {
        dispatch(limpiarFavoritos());
    }

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const favoritos = useSelector(state => state.personajes.favoritos);

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={limpiarListaFavoritos}>Limpiar Favoritos</button>
        </div>
        <GrillaPersonajes personajes={favoritos}/>
    </div>
}

export default PaginaFavoritos;