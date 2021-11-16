import { getGifs, GetGifs } from "../../helpers/getGifs";

describe("Test of GetGifs utils: fetch", () => {
    test("should fetch 10 elements", async () => {
        const gifs = await getGifs("Dragon Ball");

        expect(gifs.length).toBe(10);
    });
    test("should return a void array when argument is not send", async () => {
        const gifs = await getGifs(0);

        expect(gifs.length).toBe(10);
    });
});
