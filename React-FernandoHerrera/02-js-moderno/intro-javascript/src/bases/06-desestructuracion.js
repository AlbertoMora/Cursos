//Desestructuración
const persona = {
    nombre: "Ella",
    apellido: "Musk",
    edad: 100,
    clave: "Hilichurl",
};

//De esta forma se pueden extraer las propiedades del objeto pero es muy tediosa y poco legible
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Con : se puede crear un nombre de variable personalizado, diferente al de la propiedad del objeto
const { nombre: nombre2, apellido, edad, clave } = persona;

console.log(nombre2, apellido, edad, clave);

//Se puede hacer desestructuración directamente en los argumentos de una función y también se les puede agregar
//valores por defecto.
const retornaPersona = ({ nombre, clave, edad, rango = "capitán" }) => ({
    nombreClave: clave,
    anios: edad,
    location: {
        lat: 13.255231234123,
        lng: -12.23512332
    }
});

//Se puede hacer desestructuración anidada agregando : y asignando otra desestructuración
const {nombreClave, anios, location: {lat, lng}} = retornaPersona(persona);

console.log(nombreClave, anios);
console.log(lat, lng);