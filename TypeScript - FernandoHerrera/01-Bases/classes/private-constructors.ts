(() => {
    class Freezer {
        static instance: Freezer;

        private constructor(public name: string) {}
        static createFreezer(name: string) {
            if (!Freezer.instance) {
                Freezer.instance = new Freezer(name);
            }
            return Freezer.instance;
        }
    }

    const freezer = Freezer.createFreezer('Freezer');

    console.log(freezer);
})();
