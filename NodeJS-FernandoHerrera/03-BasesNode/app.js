const { executeMultiplication } = require('./helpers/multi');
const { argv } = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log('App Init'.blue);

const { base, list, until } = argv;

executeMultiplication(base, until, list)
    .then(fileName => console.log(`Archivo ${fileName} creado con éxito`))
    .catch(err => console.log(err));
