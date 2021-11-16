import {getImage} from '../../base/11-async-await';
describe("Testing async-await functions", () => {
    test('should return a valid url', async () => {
        const url = await getImage();

        expect(url.includes("http")).toBe(true);
    });
});