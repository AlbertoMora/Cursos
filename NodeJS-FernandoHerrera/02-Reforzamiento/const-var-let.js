//Se declaran de forma global sin importar el scope en el cual sea declarada
//Se puede utilizar la variable antes de declararla, lo cual puede llevar a errores
//****var no se utiliza nunca****

var nombre = 'Alberto';

if (true) {
    var nombre = 'Magneto';
}

console.log(nombre);

//Let tiene scope de bloque, por lo que no se puede acceder a una variable declarada en un bloque interior.
let nombre2 = 'Alberto';

if (true) {
    let nombre2 = 'Magneto';
}

console.log(nombre2);

//Const no permite mutar el valor del la variable
//No tiene setters, por lo cual es más liviano en memoria, se deben usar siempre a menos que se desee cambiar el valor, en ese caso se
//utilizaría let.
const nombre3 = 'Alberto';

if (true) {
    nombre3 = 'Magneto';
}

console.log(nombre3);
