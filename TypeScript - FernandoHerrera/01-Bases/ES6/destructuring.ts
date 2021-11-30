(() => {
    type Mangas = {
        dragon_ball: string;
        one_piece: string;
        naruto: string;
        activos: boolean;
        poder: number;
    };
    const mangas: Mangas = {
        dragon_ball: 'Goku',
        one_piece: 'Luffy',
        naruto: 'Naruto',
        activos: true,
        poder: 1234123094553554,
    };

    const { dragon_ball, poder, naruto } = mangas;
    console.log(dragon_ball.toUpperCase(), poder.toExponential(2));

    const printManga = ({ naruto, ...rest }: Mangas) => console.log(naruto, rest);

    printManga(mangas);

    const animesArr: [string, boolean, string] = ['Bleach', true, 'Code Geass'];

    const [bleach, , code] = animesArr;

    console.log(bleach, code);
})();
