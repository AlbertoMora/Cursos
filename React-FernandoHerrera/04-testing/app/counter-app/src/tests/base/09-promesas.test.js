import { getHeroByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Testing promises functionality", () => {
    test("should return an async hero", (done) => {
        const id = 1;

        getHeroByIdAsync(id).then((heroe) => {
            expect(heroe).toBe(heroes[0]);
            done();
        });
    });
    test("should return an error message if hero doesn't exists", (done) => {
        const id = 10;

        getHeroByIdAsync(id).catch((err) => {
            expect(err).toBe("No se encuentra información del héroe");
            done();
        });
    });
});
