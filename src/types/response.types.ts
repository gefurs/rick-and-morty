import Personaje from "./personaje.types";

interface Info {
    pages: number;
}

interface Response {
    info: Info;
    results: Personaje[]; 
}

export default Response;