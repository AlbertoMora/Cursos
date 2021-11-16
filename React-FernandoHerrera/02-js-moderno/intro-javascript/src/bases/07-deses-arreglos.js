const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

//De esta forma se desestructura arreglos en el mismo orden del arreglo
//const [personaje1, personaje2, personaje3] = personajes;

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => ["ABC", 123];

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//El primer valor se llamará nombre
//El segundo setNombre
const useState = (valor) => [valor, () => {console.log("Hola Mundo!")}];

const [nombre, setNombre] = useState("Goku");

console.log(nombre);
setNombre();