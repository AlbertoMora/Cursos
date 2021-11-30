namespace Validations {
    export const validateText = (text: string): boolean => text.length > 3;

    export const validateDate = (date: Date): boolean => isNaN(date.valueOf());
}

const valid = Validations.validateText('Alberto');

console.log(valid);
