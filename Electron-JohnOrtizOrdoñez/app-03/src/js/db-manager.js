const DataStore = require('nebd');
const path = require('path');

const db = new DataStore({ filename: path.join(__dirname, '../models/people.db'), autoload: true });

const addPerson = (name, lastname, email) => {
    const persona = {
        name,
        lastname,
        email,
    };

    db.insert(persona, (err, newPerson) => {});
};

const getPerson = operation => {
    db.find({}, (err, result) => {
        operation(result);
    });
};

module.exports = {
    addPerson,
    getPerson,
};
