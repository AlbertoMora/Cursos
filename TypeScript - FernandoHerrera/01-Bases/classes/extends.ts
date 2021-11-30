(() => {
    class Shinobi {
        constructor(public name: string, public realName: string) {
            console.log('Constructor Shinobi executed');
        }

        protected getFullName() {
            return `${this.name} - ${this.realName}`;
        }
    }

    class Hokage extends Shinobi {
        constructor(name: string, realName: string, public isAlive: boolean = true) {
            super(name, realName);
            console.log('Constructor Hokage executed');
        }

        getFullNameFromShinobi() {
            return super.getFullName();
        }

        get fullName() {
            return super.getFullName();
        }

        set fullName(fullName: string) {
            const [name, realName] = fullName.split(' - ');
            super.name = name;
            super.realName = realName;
        }
    }

    const Tsunade = new Hokage('Quinta Hokage', 'Tsunade Senjuu');

    Tsunade.fullName = 'Kakashi Hatake - Sexto Hokage';
    console.log(Tsunade.fullName);
})();
