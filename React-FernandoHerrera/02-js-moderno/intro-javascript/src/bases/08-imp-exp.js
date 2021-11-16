import heroes, { owners } from "../data/heroes";

//console.log(owners);

export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroById(1));

//Tanto filter como find reciben un callback que devuelve un booleano, la diferencia es que find
//retorna la primer coincidencia, mientas que filter retorna todas las coincidencias como un arreglo.
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner("Marvel"));
