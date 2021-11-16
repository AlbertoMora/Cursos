//Esto usualmente no se hace
// test("Debe de ser true", () => {
//     const isActive = false;

//     if (!isActive) {
//         throw new Error("No está activo");
//     }
// });

describe("Pruebas en el archivo demo.test.js", () => {
    test("strings should be equals", () => {
        //1. inicialización
        const mensaje = "Hola Mundo";

        //2. estímulo
        const mensaje2 = `Hola Mundo`;

        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });
});
