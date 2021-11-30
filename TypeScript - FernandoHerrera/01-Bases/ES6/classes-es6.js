(() => {
    class ZWarrior {
        constructor(name, power) {
            this.name = name;
            this.power = power;
        }
    }

    class Saiyajin extends ZWarrior {
        constructor(name, power, hasSSJ) {
            super(name, power);
            this.hasSSJ = hasSSJ;
        }
    }

    const tenshinhan = new ZWarrior('Tenshinhan', 45000);
    const goku = new Saiyajin('Goku', 3000000, true);
    console.log(tenshinhan);
    console.log(goku);
})();
