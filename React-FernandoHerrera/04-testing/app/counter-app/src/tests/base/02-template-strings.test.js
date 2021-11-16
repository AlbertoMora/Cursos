import { getSaludo } from "../../base/02-template-strings";

describe("getSaludo function testing", () => {
    test('should return "Hola Alberto"', () => {
        const nombre = "Alberto";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre);
    });

    test("should return Hola Alberto Mora if no args are given", () => {
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Alberto Mora");
    });
});
