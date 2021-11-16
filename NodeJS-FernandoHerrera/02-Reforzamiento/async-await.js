const id = 4;
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

const getInfoUsuario = async id => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado.name} es de ${salario}`;
    } catch (err) {
        throw err;
    }
};

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
