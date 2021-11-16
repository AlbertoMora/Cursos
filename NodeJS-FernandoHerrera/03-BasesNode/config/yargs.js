const { argv } = require('yargs')
    .options({
        b: {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Is the base number of the multiplcation table',
        },
        l: {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe: 'List table in console.',
        },
        u: {
            alias: 'until',
            type: 'number',
            default: 10,
            describe: 'The limit of the table.',
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('La base tiene que ser un número');
        }
        if (isNaN(argv.u)) {
            throw new Error('El límite tiene que ser un número');
        }
        return true;
    });

module.exports = { argv };
