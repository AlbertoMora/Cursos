const saludar = function (nombre) {
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => (
     {
        uid: 'Asdb123',
        username: "js_lover"
    }
)

export const getUsuarioActivo = nombre => ({
    uid: "asdn133",
    username: nombre
})

const usuarioActivo = getUsuarioActivo("Alberto");