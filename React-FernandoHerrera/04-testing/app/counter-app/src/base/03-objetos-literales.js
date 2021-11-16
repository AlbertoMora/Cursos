const persona = {
    nombre: "Sasuke",
    apellido: "Uchiha",
    edad: 16,
    direccion: {
        ciudad: "Konoha",
        zip: "0903123",
        lat: 23.4123412,
        lng: -234.231235
    }
};

//para tener el nombre de la variable del objeto se puede encerrar en {}
console.log({ persona });

// copia de la referencia en memoria -> const persona2 = persona;
const persona2 = {...persona};
persona2.nombre = "Naruto";

console.log({persona2});