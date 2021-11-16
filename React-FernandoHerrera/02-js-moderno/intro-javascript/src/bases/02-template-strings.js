console.log("log")

const nombre = "Alberto";
const apellido = "Mora";

// const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `Hola ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo (nombreCompleto) {
    return "Hola " + nombreCompleto;
}

console.log(`Este es un texto: ${getSaludo("Alberto")}`)