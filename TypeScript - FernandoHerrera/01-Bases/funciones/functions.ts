(() => {
    const hero: string = 'Wukong';

    function returnName(): string {
        return hero;
    }

    const hitWithStaff = (): string => {
        return 'Hitting you!';
    };

    const heroName = returnName();
    console.log(heroName);
})();
