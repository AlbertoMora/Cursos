(() => {
    //una función de tipo never es una función que no debe terminar exitosamente
    //por ejemplo, una función que retorna una excepción o una función con un ciclo infinito
    const abc = (message: string): never => {
        throw new Error(message);
    };
    abc('Auxilio');
})();
