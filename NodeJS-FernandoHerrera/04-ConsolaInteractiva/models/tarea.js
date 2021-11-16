const { v4: uuid } = require('uuid');

class Tarea {
    id = '';
    desc = '';
    completeAt = null;

    constructor(desc) {
        this.desc = desc;
        this.id = uuid();
    }
}

module.exports = Tarea;
