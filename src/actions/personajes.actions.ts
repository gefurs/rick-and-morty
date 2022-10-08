import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import { listarPersonajesAPI, buscarPersonajesAPI} from "../services/personajes.services";
import {IRootState} from "../store/store";
import Personaje from "../types/personaje.types";

export interface ListarPersonajesAction extends Action {
    type: "LISTAR_PERSONAJES",
    payload: {
        page: number,
        maxPage: number,
        personajes: Personaje[]
    }
}

export interface BuscarPersonajesAction extends Action {
    type: "BUSCAR_PERSONAJES",
    payload: {
        page: number,
        name: string
    }
}

export interface BuscarPersonajesSuccessAction extends Action {
    type: "BUSCAR_PERSONAJES_SUCCESS",
    payload: {
        page: number,
        maxPage: number,
        personajes: Personaje[]
    }
}

export interface BuscarPersonajesErrorAction extends Action {
    type: "BUSCAR_PERSONAJES_ERROR",
    payload: {
        error: string
    }
}

export interface AgregarFavoritoAction extends Action {
    type: "AGREGAR_FAVORITO",
    payload: {
        favorito: Personaje
    }
}

export interface EliminarFavoritoAction extends Action {
    type: "ELIMINAR_FAVORITO",
    payload: {
        favorito: Personaje
    }
}

export interface LimpiarFavoritosAction extends Action {
    type: "LIMPIAR_FAVORITOS",
    payload: {
        favoritos: Personaje[]
    }
}

export interface MostrarDetallesPersonajeAction extends Action {
    type: "MOSTRAR_DETALLES_PERSONAJE",
    payload: {
        personaje: Personaje
    }
}

export const listarPersonajes: ActionCreator<ListarPersonajesAction> = (page: number, maxPage: number, personajes: Personaje[]) => {
    return {
        type: "LISTAR_PERSONAJES",
        payload: {
            page: page,
            maxPage: maxPage,
            personajes: personajes
        }
    }
}

export const buscarPersonajes: ActionCreator<BuscarPersonajesAction> = (page: number, busqueda: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        payload: {
            page: page,
            name: busqueda
        }
    }
}

const buscarPersonajesSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (page: number, maxPage: number, personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_SUCCESS",
        payload: {
            page: page,
            maxPage: maxPage,
            personajes: personajes
        }
    }
}

const buscarPersonajesError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        payload: {
            error: error
        }
    }
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (favorito: Personaje) => {
    return {
        type: "AGREGAR_FAVORITO",
        payload: {
            favorito: favorito
        }
    }
}

export const eliminarFavorito: ActionCreator<EliminarFavoritoAction> = (favorito: Personaje) => {
    return {
        type: "ELIMINAR_FAVORITO",
        payload: {
            favorito: favorito
        }
    }
}

export const limpiarFavoritos: ActionCreator<LimpiarFavoritosAction> = (favoritos: Personaje[]) => {
    return {
        type: "LIMPIAR_FAVORITOS",
        payload: {
            favoritos: favoritos
        }
    }
}

export const mostrarDetallesPersonaje: ActionCreator<MostrarDetallesPersonajeAction> = (personaje: Personaje) => {
    return {
        type: "MOSTRAR_DETALLES_PERSONAJE",
        payload: {
            personaje: personaje
        }
    }
}

export interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAcciones>{}

export const buscarPersonajesThunk = (name: string, page: number): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        dispatch(buscarPersonajes(name, page));
        try{
            const response = await buscarPersonajesAPI(name, page);
            dispatch(buscarPersonajesSuccess(page, response.info.pages, response.results));
        }catch(error){
            const errorMessage = new Error("No se encontró el personaje");
            dispatch(buscarPersonajesError(errorMessage.message));
        }
    }
}

export interface ListarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAcciones>{}

export const listarPersonajesThunk = (page: number): ListarPersonajesThunkAction => {
    return async (dispatch, getState) => {
        try {
            const response = await listarPersonajesAPI(page);
            dispatch(listarPersonajes(page, response.info.pages, response.results));
        } catch (error) {
            const errorMessage = new Error("No se encontró el personaje");
            dispatch(buscarPersonajesError(errorMessage.message));
        }
    }
}

export type PersonajesAcciones = ReturnType<typeof listarPersonajes> | 
                                    ReturnType<typeof buscarPersonajes> | 
                                    ReturnType<typeof buscarPersonajesSuccess> | 
                                    ReturnType<typeof buscarPersonajesError> |
                                    ReturnType<typeof agregarFavorito> | 
                                    ReturnType<typeof eliminarFavorito> |
                                    ReturnType<typeof limpiarFavoritos> |
                                    ReturnType<typeof mostrarDetallesPersonaje>;
