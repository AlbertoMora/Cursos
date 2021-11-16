const nombre = "Alberto";
const apellido = "Mora";

// const nombreCompleto = nombre + " " + apellido;

const nombreCompleto = `Hola ${nombre} ${apellido}`;

export function getSaludo (nombreCompleto = "Alberto Mora") {
    return "Hola " + nombreCompleto;
}
