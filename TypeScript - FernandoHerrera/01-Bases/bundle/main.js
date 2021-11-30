"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => text.length > 3;
    Validations.validateDate = (date) => isNaN(date.valueOf());
})(Validations || (Validations = {}));
const valid = Validations.validateText('Alberto');
console.log(valid);
//# sourceMappingURL=main.js.map