(() => {
    //Si una variable booleana se deja sin inicializar,
    //generarĂ¡ un error al momento de utilizarla
    let isSuperman: boolean = true;

    isSuperman = true && false;

    console.log({ isSuperman });
})();
