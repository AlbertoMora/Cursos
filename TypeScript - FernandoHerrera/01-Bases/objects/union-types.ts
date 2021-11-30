(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string;
    };

    let myCustomVariable: string | number | Hero = 'Heroe';
    console.log(typeof myCustomVariable);

    myCustomVariable = 2;
    console.log(typeof myCustomVariable);
    //This is a comment
    myCustomVariable = {
        name: 'Data',
        age: 20,
        powers: [],
    };
    console.log(typeof myCustomVariable);
})();
