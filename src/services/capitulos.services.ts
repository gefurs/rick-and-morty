import Capitulo from "../types/capitulo.type";

// /**
//  * Realiza un llamado a la api de Rick and Morty, y devuelve un capítulo por su id. 
//  * @param id - El id del capítulo seleccionado.
//  * @returns Un objeto capítulo.
//  */
export const buscarCapituloAPI = async (id?: number): Promise<Capitulo> => {
    
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
}