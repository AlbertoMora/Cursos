import { retornaArreglo } from "../../base/07-deses-arreglos"

describe('Destructuring testing', () => {
    test('should return string and number', () => {
        
        const [letras, numeros] = retornaArreglo(); 

        expect(letras).toBe("ABC");
        expect(typeof letras).toBe("string");

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe("number");

    })
    
})