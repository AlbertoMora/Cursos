(() => {
    let flash: {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    } = {
        name: 'Barry Allen',
        age: 26,
        powers: ['fast', 'time travel'],
    };

    // flash = {
    //     name: 'Clark Kent',
    //     powers: ['all'],
    //     getName(): string {
    //         return this.name;
    //     },
    // };

    // console.log(flash);
})();
