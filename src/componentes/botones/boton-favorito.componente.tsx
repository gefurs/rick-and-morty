import { TypedUseSelectorHook, useDispatch, useSelector as useReduxSelector } from "react-redux";
import { IRootState } from "../../store/store";
import { agregarFavorito, eliminarFavorito } from "../../actions/personajes.actions";
import Personaje from "../../types/personaje.types";
import star from "../../images/star.png";
import star_filled from "../../images/star-filled.png";
import './boton-favorito.css';

/**
 * Boton que permite agregar personajes a la lista de favoritos o eliminarlos de la misma
 * 
 * Uso: `<BotonFavorito />`
 * 
 * @param {personajes} props Props con el estado del personaje que viene de la tarjeta de personaje
 * 
 * @returns Un elemento JSX 
 */

const BotonFavorito = (personaje: Personaje) => {
    const dispatch = useDispatch();

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

    const favoritos = useSelector(state => state.personajes.favoritos);
    const esFavorito = favoritos.find((favorito) => favorito.id === personaje.id);
    const src = esFavorito ? `${star_filled}` : `${star}`;

    const toggleFavorito = () => {
        if(!esFavorito) {
            dispatch(agregarFavorito(personaje));
        } else {
            dispatch(eliminarFavorito(personaje));
        }
    }

    return <div className="boton-favorito" onClick={toggleFavorito}>
        <img src={src} alt={"favorito"}/>
    </div>
}

export default BotonFavorito;