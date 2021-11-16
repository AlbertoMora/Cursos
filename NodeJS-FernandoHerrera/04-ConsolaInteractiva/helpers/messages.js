const showMenu = async () => {
    console.clear();
    console.log('************************'.cyan);
    console.log('****Select an Option****'.cyan);
    console.log('************************ \n'.cyan);

    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir`);
    return await pause(`\nSeleccione una opción del menú\n`);
};

const pause = questionText => {
    return new Promise((resolve, reject) => {
        try {
            const readLine = require('readline').createInterface({
                input: process.stdin,
                output: process.stdout,
            });

            readLine.question(questionText, option => {
                resolve(option);
                readLine.close();
            });
        } catch (err) {
            reject(err);
            throw err;
        }
    });
};

module.exports = {
    showMenu,
    pause,
};
