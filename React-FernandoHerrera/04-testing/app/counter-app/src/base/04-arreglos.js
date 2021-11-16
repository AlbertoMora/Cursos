// const arreglo = new Array();
const arreglo = [1,2,3,4];

// arreglo.push(1)
//No se utiliza ^ porque modifica el objeto principal
//Es mejor utilizar operador spread

let arreglo2 = [...arreglo, 5];
// arreglo2.push(5); <-- modifica arreglo 1 y arreglo 2

const arreglo3 = arreglo2.map(item => item * 2);


console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);