import { getHeroById } from "./08-imp-exp";

export const getHeroByIdAsync = (id) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            //Tarea
            //importar el archivo imp-exp
            const heroe = getHeroById(id);

            //Cuando la tarea se ejecuta bien, se lanza el resolve
            //Si no se lanza el reject
            heroe ? resolve(heroe) : reject("No se encuentra información del héroe");
        }, 1500);
    });
