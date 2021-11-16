import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("05-funciones.test.js testing", () => {
    test("getUser should return an object", () => {
        const userTest = {
            uid: "Asdb123",
            username: "js_lover",
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    });
    test('getUsuarioActivo should return an object with the properties of objectTest', () => {
        const name = "Alberto";
        const objectTest = {
            uid: "asdn133",
            username: name
        };

        const user = getUsuarioActivo(name);

        expect(user).toEqual(objectTest);
    })
    
});
