(() => {
    //strictNullChecks No permite asignar null o undefined a otros tipos de datos
    //si se necesita, la mejor forma de hacerlo es estableciéndolo explicitamente
    //como en el siguiente código
    let nada: number | undefined = undefined;

    console.log(nada);
})();
