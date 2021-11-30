(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    const flash: Hero = {
        name: 'Barry Allen',
        age: 26,
        powers: ['fast', 'time travel'],
    };

    const superman: Hero = {
        name: 'Barry Allen',
        age: 26,
        powers: ['fast', 'time travel'],
    };

    // console.log(flash);
})();
