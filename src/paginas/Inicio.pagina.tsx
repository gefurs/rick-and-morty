import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { buscarPersonajesThunk, listarPersonajesThunk } from "../actions/personajes.actions";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../store/store";
import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const [page, setPage] = useState(1);
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if(!name) {
            dispatch(listarPersonajesThunk(page));
        } else {
            dispatch(buscarPersonajesThunk(name, page));
        }
        
    }, [dispatch, page, name]);

    const limpiarFiltros = () => {
        setName("");
        setPage(1);
    }

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const personajes = useSelector(state => state.personajes.personajes);
    // console.log(personajes);

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={limpiarFiltros}>Limpiar Filtros</button>
        </div>
        <Filtros name={name} setName={setName} />
        <Paginacion page={page} setPage={setPage} />
        <GrillaPersonajes personajes={personajes}/>
        <Paginacion page={page} setPage={setPage} />
    </div>
}

export default PaginaInicio;