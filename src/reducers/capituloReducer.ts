import { Reducer } from "@reduxjs/toolkit";
import { CapituloAcciones } from "../actions/capitulos.actions";
import Capitulo from "../types/capitulo.type";

interface EstadoCapitulo {
    capitulo: Capitulo;
    error: string | null;
}

const initialState: EstadoCapitulo = {
    capitulo: {} as Capitulo,
    error: null
};

/**
 * Función reductora para el estado del capítulo
 * 
 * @param {initialState} state
 * @param {{
 *      type: string,
 *      payload: {
 *          [string]: string
 *      }
 *  }} action
 * @returns {state}
 */
const capituloReducer: Reducer<EstadoCapitulo, CapituloAcciones> = (state = initialState, action) => {
    switch (action.type) {
        case "BUSCAR_CAPITULO":
            return {
                ...state,
                error: null
            }
        case "BUSCAR_CAPITULO_SUCCESS":
            return {
                ...state,
                capitulo: action.payload.capitulo,
                error: null
            }
        case "BUSCAR_CAPITULO_ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return {
                ...state
            }
    }
}

export default capituloReducer;