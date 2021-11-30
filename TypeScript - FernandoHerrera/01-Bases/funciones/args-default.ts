(() => {
    const fullName = (firstName: string, lastname?: string, upper: boolean = false): string => {
        const name = `${firstName} ${lastname || ''}`;
        return upper ? name.toUpperCase() : name;
    };

    const name = fullName('Ans');
    console.log(name);
})();
