(() => {
    let avengers: number = 15;
    console.log(avengers);

    const villians: number = 20;

    if (avengers < villians) {
        console.log('Problems');
    } else {
        console.log('Nice');
    }

    avengers = Number('123A');
    console.log({ avengers });
})();
