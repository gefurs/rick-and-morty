import { Reducer } from "@reduxjs/toolkit";
import { PersonajesAcciones } from "../actions/personajes.actions";
import Personaje from "../types/personaje.types";

interface EstadoPersonajes {
    busqueda: String;
    page: number;
    maxPage: number;
    personajes: Personaje[];
    favoritos: Personaje[];
    personaje: Personaje;
    error: string | null;
}

const initialState: EstadoPersonajes = {
    busqueda: "",
    page: 1,
    maxPage: 1,
    personajes: [],
    favoritos: [],
    personaje: {} as Personaje,
    error: null
};

const personajesReducer: Reducer<EstadoPersonajes, PersonajesAcciones> = (state = initialState, action) => {
    switch (action.type) {
        case "LISTAR_PERSONAJES":
            return {
                ...state,
                page: action.payload.page,
                maxPage: action.payload.maxPage,
                personajes: [...action.payload.personajes],
                error: null
            }
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                page: action.payload.page,
                busqueda: action.payload.name,
                error: null
            }
        case "BUSCAR_PERSONAJES_SUCCESS":
            return {
                ...state,
                maxPage: action.payload.maxPage,
                personajes: [...action.payload.personajes],
                error: null
            }
        case "BUSCAR_PERSONAJES_ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        case "AGREGAR_FAVORITO":
            return {
                ...state,
                favoritos: [action.payload.favorito, ...state.favoritos.filter((favorito) => favorito.id !== action.payload.favorito.id)]
            }
        case "ELIMINAR_FAVORITO":
            return {
                ...state,
                favoritos: [...state.favoritos.filter((favorito) => favorito.id !== action.payload.favorito.id)]
            }
        case "LIMPIAR_FAVORITOS":
            return {
                ...state,
                favoritos: []
            }
        case "MOSTRAR_DETALLES_PERSONAJE":
            return {
                ...state,
                personaje: action.payload.personaje
            }
        default:
            return {
                ...state
            }
    }
}

export default personajesReducer;