import Response from "../types/response.types";

/**
 * Realiza un llamado a la api de Rick and Morty, y devuelve todos los personajes. 
 * @param page - El número de página que quiero mostrar.
 * @returns Array de personajes.
 */

export const listarPersonajesAPI = async (page: number): Promise<Response> => {
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const result = await response.json();
    return result;
}

/**
 * Realiza un llamado a la api de Rick and Morty y busca los personajes que tengan un determinado nombre. 
 * @param params - El nombre del personaje que quiero buscar.
 * @param page - El número de página que quiero mostrar.
 * @returns Array de personajes.
 */
export const buscarPersonajesAPI = async (nombre?: string, page?: number): Promise<Response> => {
    let params = "?"
    if (nombre){
        params += `name=${nombre}`
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${params}&page=${page}`);
    const result = await response.json();
    return result;
}