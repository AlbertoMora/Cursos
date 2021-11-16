const empleados = [
    { id: 1, name: 'Alberto' },
    { id: 2, name: 'Alberto2' },
    { id: 3, name: 'Alberto3' },
];

const salarios = [{ id: 1, salario: 1000 }, { id: 2, salario: 1500 }, { id: 3 }];

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(empleado => empleado.id === id);

    empleado ? callback(null, empleado) : callback(`Empleado con id ${id} no existe.`);
};

getEmpleado(2, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        console.log(empleado);
    }
});

const getSalario = (id, callback) => {
    const { salario } = salarios.find(salario => salario.id === id);
    salario ? callback(null, salario) : callback(`El empleado con id ${id} no posee salario`);
};

getSalario(3, (err, salario) => {
    err ? console.log(err) : console.log(salario);
});
