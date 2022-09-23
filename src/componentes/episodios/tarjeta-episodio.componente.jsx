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
            <h4>{capitulo}</h4>
            {/* <h4>Close Rick-counters of the Rick Kind</h4>
            <div>
                <span>S01E01</span>
                <span>Lanzado el: April 7, 2014</span>
            </div>   */}
    </div>
}

export default TarjetaEpisodio;