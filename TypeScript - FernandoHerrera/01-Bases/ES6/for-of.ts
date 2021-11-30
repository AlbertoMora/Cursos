(() => {
    type Avenger = {
        name: string;
        weapon: string;
    };

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit',
    };
    const spiderman: Avenger = {
        name: 'Spiderman',
        weapon: 'Hands',
    };
    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield',
    };

    const Avengers: Avenger[] = [ironman, spiderman, captainAmerica];

    for (const avenger of Avengers) {
        console.log(avenger);
    }
})();
