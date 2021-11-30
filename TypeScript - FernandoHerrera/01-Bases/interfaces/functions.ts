(() => {
    interface addTwoNumber {
        (a: number, b: number): number;
    }

    let addNumbers: addTwoNumber;

    addNumbers = (a: number, b: number) => {
        return 10;
    };
})();
