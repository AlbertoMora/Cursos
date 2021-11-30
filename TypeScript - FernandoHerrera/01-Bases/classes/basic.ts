(() => {
    class ZWarrior {
        static avgAge: number = 30;
        static getAvgAge = () => ZWarrior.avgAge;

        constructor(private name: string, public team: string, public realName?: string) {}

        public bio = () => `${this.name} - ${this.team}`;
    }

    const krillin: ZWarrior = new ZWarrior('Krillin', 'Kame', 'Krillin');
    console.log(krillin);
    console.log(ZWarrior.avgAge);
    console.log(krillin.bio());
    console.log(ZWarrior.getAvgAge());
})();
