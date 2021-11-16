const getUsuarioById = (id, callback) => {
    const usuario = { id, nombre: 'Alberto' };
    setTimeout(() => {
        callback(usuario);
    }, 1500);
};

getUsuarioById(10, ({ nombre }) => {
    console.log(`Hola ${nombre}`);
});
