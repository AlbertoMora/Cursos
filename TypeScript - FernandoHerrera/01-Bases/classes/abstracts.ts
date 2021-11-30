(() => {
    abstract class Character {
        constructor(public name: string, public saga: string) {}
    }

    class Villian extends Character {
        constructor(name: string, saga: string) {
            super(name, saga);
        }

        destroyPlanet() {
            return 'This world has been destroyed';
        }
    }

    class ZWarrior extends Character {
        saveUniverse() {
            return 'Universe has been saved by: ';
        }
    }

    const goku = new ZWarrior('Goku', 'Namekusei');
    const freezer = new Villian('Freezer', 'Namekusei');

    console.log(freezer.destroyPlanet());
    console.log(goku.saveUniverse());

    const printName = (character: Character) => {
        console.log(character.name);
    };

    printName(goku);
})();
