(() => {
    const fullName = (firstName: string, ...rest: string[]): string => {
        return `${firstName} ${rest.join(' ')}`;
    };

    const name = fullName('Son', 'Goku', ' - ', 'Kakarotto');

    console.log({ name });
})();
