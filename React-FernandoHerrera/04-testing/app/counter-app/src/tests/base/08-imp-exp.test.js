import { getHeroById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";
describe("Testing of export and import", () => {
    test("should return a hero by id", () => {
        const id = 1;
        const heroe = getHeroById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });
    test("should return undefined if hero doesn't exists", () => {
        const id = 10;
        const heroe = getHeroById(id);

        expect(heroe).toBe(undefined);

    });

    test("should return an array of heroes", () => {
        const owner = "DC";
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);

        expect(heroe).toEqual(heroeData);

    });

    test("should return an array of heroes of length 2", () => {
        const owner = "Marvel";
        const heroe = getHeroesByOwner(owner);
        console.log(heroe);

        expect(heroe.length).toBe(2);

    });

});
