//No se deben hacer funciones de la manera que se muestra abajo, por es fácil sobrescribirlas.
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }
// saludar = 5;

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};
//Esta es la forma correcta

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Ichigo"));
console.log(saludar2("Kira"));

//Para devolver un objeto se debe encerrar en paréntesis.
const getUser = () => (
     {
        uid: 'Asdb123',
        username: "js_lover"
    }
)

console.log(getUser());

//Tarea
//Transformar a función de flecha
//Retornar objeto implícito
//Pruebas
// function getUsuarioActivo(nombre) {
//     return {
//         uid: "asdn133",
//         username: nombre
//     }
// }

const getUsuarioActivo = nombre => ({
    uid: "asdn133",
    username: nombre
})

const usuarioActivo = getUsuarioActivo("Alberto");
console.log(usuarioActivo);