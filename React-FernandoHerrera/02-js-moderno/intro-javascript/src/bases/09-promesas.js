import { getHeroById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         //importar el archivo imp-exp
//         const heroe = getHeroById(2);

//         //Cuando la tarea se ejecuta bien, se lanza el resolve
//         resolve(heroe);
//         //Si no se lanza el reject
//         //reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa
//     .then((res) => {
//         console.log("Then de la promesa " + res.name);
//     })
//     .catch((err) => {
//         console.warn(err);
//     })
//     .finally(() => {});

const getHeroByIdAsync = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            //importar el archivo imp-exp
            const heroe = getHeroById(id);

            //Cuando la tarea se ejecuta bien, se lanza el resolve
            //Si no se lanza el reject
            heroe ? resolve(heroe) : reject("No se encuentra información del héroe");

        }, 2000);
    });

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.error);
