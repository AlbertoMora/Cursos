(() => {
    interface Namekuseijin {
        name: string;
        food: string;
        clone(id: number): string;
    }

    interface Saiyajin {
        name: string;
        hasSsjUnlocked: boolean;
    }

    class Piccolo implements Namekuseijin, Saiyajin {
        constructor(public name: string, public food: string, public hasSsjUnlocked: boolean) {}

        public clone(id: number) {
            return `${this.name} namekuseijin has been cloned`;
        }
    }
})();
