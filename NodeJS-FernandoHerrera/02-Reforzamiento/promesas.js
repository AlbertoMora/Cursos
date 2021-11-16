const id = 1;
const empleados = [
    { id: 1, name: 'Alberto' },
    { id: 2, name: 'Alberto2' },
    { id: 3, name: 'Alberto3' },
];

const salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 1500 }, { id: 3 }];

const getEmpleado = id => {
    const empleado = empleados.find(empleado => empleado.id === id);

    return new Promise((resolve, reject) => {
        empleado ? resolve(empleado) : reject(`El empleado con id ${id} no existe`);
    });
};

const getSalario = id => {
    const { salario } = salarios.find(salario => salario.id === id);
    return new Promise((resolve, reject) => {
        salario ? resolve(salario) : reject(`El empleado con id ${id} no posee salario`);
    });
};

//Forma incorrecta de trabajar promesas en cadena
// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => console.log(`El empleado ${empleado.name} tiene un salario de ${salario}`))
//             .catch(err => {
//                 console.log(err);
//             });
//     })
//     .catch(err => {
//         console.log(err);
//     });

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado.name;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch(err => {
        console.log(err);
    });
