const { multiplicar } = require('./helpers/helper');
const argv = require('./config/yargs');

const base = argv.base;
const listar = argv.list;
const hasta = argv.hasta;

multiplicar(base, listar, hasta)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
