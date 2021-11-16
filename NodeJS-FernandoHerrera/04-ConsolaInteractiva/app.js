require('colors');

const {
    inquirerMenu,
    inquirerPause,
    readInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist,
} = require('./helpers/inquirer');
const { saveDB, readDB } = require('./helpers/saveFile');
const Tareas = require('./models/tareas');

console.clear();
const main = async () => {
    let option = '';
    const tareas = new Tareas();
    const data = readDB();

    if (!!data) {
        tareas.cargarTareas(data);
    }

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const desc = await readInput('Descripción: ');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas.listadoCompleto());
                break;
            case '3':
                console.log(tareas.listadoPorEstado(true));
                break;
            case '4':
                console.log(tareas.listadoPorEstado(false));
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.establecerCompletado(ids);
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr);
                const isOk = await confirmar('¿Está seguro que desea borrar esta tarea?');
                if (isOk) tareas.borrarTarea(id);
        }

        saveDB(tareas.listadoArr);

        if (option !== '0') await inquirerPause();
    } while (option !== '0');
};

main();
