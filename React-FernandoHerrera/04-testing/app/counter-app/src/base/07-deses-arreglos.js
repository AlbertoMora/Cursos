const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = personajes;
export const retornaArreglo = () => ["ABC", 123];

const usState = (valor) => [valor, () => {console.log("Hola Mundo!")}];

const [nombre, setNombre] = usState("Goku");