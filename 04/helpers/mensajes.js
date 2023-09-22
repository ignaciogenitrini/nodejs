require('colors');
console.clear();

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.log("===================".green);
        console.log(" Selecciona una opción ".green);
        console.log("===================".green);
    
        console.log(`${"1.".green} Crear tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tarea(s)`);
        console.log(`${"6.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir`);
    
        const readline = require('node:readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question('\n ¿Qué acción desea realizar? \n', (opt) => {
            readline.close();
            resolve(opt);
        }); 
    });

}

const pause = () => {
    return new Promise(resolve => {
        const readline = require('node:readline').createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    
        readline.question(`\n Presione ${"ENTER".green} para continuar \n`, () => {
            readline.close();
            resolve();
        }); 
    });

}

module.exports = {
    mostrarMenu,
    pause
}