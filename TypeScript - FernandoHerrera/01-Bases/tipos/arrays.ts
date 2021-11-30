(() => {
    const numbers: number[] = [1, 2, 3, 4, 5, 7, 8, 9, 10];

    numbers.push(11);

    console.log(numbers);

    const villians = ['Omega Rojo', 'Freezer', 'Cell'];

    villians.forEach(v => console.log(v.toUpperCase()));
})();
