const activo = true;

//Esto se realiza cuando se quiere ejecutar un else.
const mensaje = activo ? 'Activo' : 'Inactivo';

//Esto se realiza cuando se quiere ejecutar sólo el if.
const mensaje2 = !activo && 'Activo';


console.log(mensaje);
console.log(mensaje2);