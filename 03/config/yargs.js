const argv = require('yargs')
    .check((argv, options) => {
        const base = argv.base;
        const hasta = argv.hasta;

        if (isNaN(base)) {
            throw new Error("La base debe ser un numero");
        } 

        if (isNaN(hasta)) {
            throw new Error("El parametro de hasta debe ser un numero");
        } 

        return true;
    })
    .options({
        'b': {
            alias: 'base',
            demandOption: true,
            type: 'number',
            describe: 'base para multiplicar'
        },
        'l': {
            alias: 'list',
            demandOption: true,
            type: 'boolean',
            describe: 'listar multiplicación',
            default: false
        },
        'h': {
            alias: 'hasta',
            demandOption: true,
            type: 'number',
            describe: 'numero hasta donde se multiplicara',
        }
    })
    .argv;

module.exports = argv;