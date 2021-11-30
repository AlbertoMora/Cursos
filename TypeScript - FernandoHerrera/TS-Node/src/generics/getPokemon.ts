import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async (id: number): Promise<Pokemon> => {
    const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return data;
};
