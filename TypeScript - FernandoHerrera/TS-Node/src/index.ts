// import powers from './classes/data/powers';
// import Fighter, { Fighter2 as SecondFighter } from './classes/Fighter';
//import * as FighterLibrary from './classes/Fighter';
import { printObject, genericFunction, genericFunctionArrow } from './generics/generics';
import { Villian, Hero } from './interfaces';
import { getPokemon } from './generics/getPokemon';
import { Pokemon } from './decorators/pokemon';
// console.log('Hola Mundo!!!!!!!!!!');

// const bruceLee = new Fighter('Bruce Lee', 'Striker', 43, 28, 1);

// const mcGregor = new SecondFighter('Connor McGregor');

// console.log(bruceLee);
// console.log(mcGregor);

// console.log(powers);

// console.log(bruceLee.power);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2 });
// printObject([1, 2, 3, 4, 5]);

// console.log(genericFunctionArrow(3.1416).toFixed(2));
// console.log(genericFunctionArrow(`aasd`).toUpperCase());

// const deadpool = {
//     name: 'Deadpool',
//     realName: 'Wade Winston Wilson',
//     dangerLevel: 130,
// };

// console.log(genericFunctionArrow<Hero>(deadpool).realName);

// getPokemon(3)
//     .then(pokemon => console.log(pokemon.name.toUpperCase(), pokemon.sprites.front_female))
//     .catch(err => console.log(err));

const bulbasaur = new Pokemon('Bulbasaur');

// (Pokemon.prototype as any).customProperty = 'Pikachu';

bulbasaur.savePokemonToDb(0);
console.log(bulbasaur);
