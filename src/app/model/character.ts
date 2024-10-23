import { CharacterLocation } from "./characterLocation";

export interface Character {
    name: string;
    created: Date;
    gender: string;
    image: string;
    id: number;
    status: string;
    species: string;
    location: CharacterLocation;
    origin: CharacterLocation;

}
