interface Location {
    name: string;
    url: string;
}

interface Personaje {
    id: number;
    name: string;  
    status: string;
    image: string;
    species: string;
    gender: string;
    location: Location;
    episode: string[];
}

export default Personaje;