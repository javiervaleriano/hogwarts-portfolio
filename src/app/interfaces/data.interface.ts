// Interfaz que se asegura de que la propiedad "wand" de la API tenga dentro las propiedades de la interfaz a continuación:
interface WandInterface {
    wood: string;
    core: string;
    length: string;
}

// Una interfaz global que posee todas las propiedades de los datos de las API's
export interface PEPInterface {
    name: string;
    alternate_names: Array<string>;
    species: string;
    gender: string;
    house: string;
    dateOfBirth: string;
    yearOfBirth: number;
    wizard: boolean;
    ancestry: string;
    eyeColour: string;
    hairColour: string;
    wand: WandInterface;
    patronus: string;
    hogwartsStudent: boolean;
    hogwartsStaff: boolean;
    actor: string;
    alternate_actors: Array<string>;
    alive: boolean;
    image: string;
}