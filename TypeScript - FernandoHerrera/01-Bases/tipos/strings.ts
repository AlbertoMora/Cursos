(() => {
    const batman: string = 'Batman';
    const linterVerde: string = "Linterna' Verde";
    const volcanNegro: string = `Heroe: Volcán Negro`;
    console.log(`U're ${batman}`);
    console.log(batman.toUpperCase());
    console.log(batman[20]?.toUpperCase() || 'Not present');
})();
