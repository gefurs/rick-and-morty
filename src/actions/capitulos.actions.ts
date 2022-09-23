import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import { buscarCapituloAPI } from "../services/capitulos.services";
import {IRootState} from "../store/store";
import Capitulo from "../types/capitulo.type";

export interface BuscarCapituloAction extends Action {
    type: "BUSCAR_CAPITULO",
    payload: {
        id: number
    }
}

export interface BuscarCapituloSuccessAction extends Action {
    type: "BUSCAR_CAPITULO_SUCCESS",
    payload: {
        id: number,
        capitulo: Capitulo
    }
}

export interface BuscarCapituloErrorAction extends Action {
    type: "BUSCAR_CAPITULO_ERROR",
    payload: {
        error: string
    }
}

export const buscarCapitulo: ActionCreator<BuscarCapituloAction> = (id: number) => {
    return {
        type: "BUSCAR_CAPITULO",
        payload: {
            id: id
        }
    }
}

const buscarCapituloSuccess: ActionCreator<BuscarCapituloSuccessAction> = (id: number, capitulo: Capitulo) => {
    return {
        type: "BUSCAR_CAPITULO_SUCCESS",
        payload: {
            id: id,
            capitulo: capitulo
        }
    }
}

const buscarCapituloError: ActionCreator<BuscarCapituloErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_CAPITULO_ERROR",
        payload: {
            error: error
        }
    }
}

export interface BuscarCapituloThunkAction extends ThunkAction<void, IRootState, unknown, CapituloAcciones>{}

export const buscarCapituloThunk = (id: number): BuscarCapituloThunkAction => {
    return async (dispatch, getState) => {
        dispatch(buscarCapitulo(id));
        try{
            const response = await buscarCapituloAPI(id);
            // console.log(response);
            dispatch(buscarCapituloSuccess(id, response));
        }catch(error){
            const errorMessage = new Error("No se encontró el capítulo");
            dispatch(buscarCapituloError(errorMessage.message));
        }
    }
}

export type CapituloAcciones =  ReturnType<typeof buscarCapitulo> | ReturnType<typeof buscarCapituloSuccess> | ReturnType<typeof buscarCapituloError>;
