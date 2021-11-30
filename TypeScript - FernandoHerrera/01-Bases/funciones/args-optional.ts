(() => {
    const fullName = (firstName: string, lastname?: string): string => {
        return `${firstName} ${lastname || ''}`;
    };

    const name = fullName('Ans');
    console.log(name);
})();
