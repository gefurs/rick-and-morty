import { FC } from "react";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../../store/store";
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * @param {page} props Props con el estado de la página que viene de la página de inicio
 * @param {setPage} props Props con la función modificadora del estado de la página que viene de la página de inicio
 * 
 * @returns un JSX element 
 */

type PaginacionType = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Paginacion: FC<PaginacionType> = ({ page, setPage }) => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const maxPage = useSelector(state => state.personajes.maxPage);

    const disminuirPagina = () => {
        setPage((prev) => prev - 1);
    }

    const aumentarPagina = () => {
        setPage((prev) => prev + 1);
    }

    return <div className="paginacion">
        <button onClick={disminuirPagina} disabled={page === 1 ? true : false} className={"primary"} >Anterior</button>
        <button onClick={aumentarPagina} disabled={page === maxPage ? true : false} className={"primary"}>Siguiente</button>
    </div>
}

export default Paginacion;