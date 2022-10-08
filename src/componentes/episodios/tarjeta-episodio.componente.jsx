import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * @param {capitulo} props Props con el estado del capítulo que viene del detalle del personaje
 * 
 * @returns Un elemento JSX 
 */
const TarjetaEpisodio = ({ capitulo }) => {

    return <div className="tarjeta-episodio">
            <h4>{capitulo.name}</h4>
            <div>
                <span>{capitulo.episode}</span>
                <span>Lanzado el: {capitulo.air_date}</span>
            </div>  
    </div>
}

export default TarjetaEpisodio;