import Capitulo from "../types/capitulo.type";

/**
 * Realiza un llamado a la api de Rick and Morty, y devuelve un capítulo por su id. 
 * @param url - La url del capítulo seleccionado.
 * @returns Un objeto capítulo.
 */
export const buscarCapituloAPI = async (url?: string): Promise<Capitulo> => {
    const response = await fetch(`${url}`);
    const result = await response.json();
    return result;
}
