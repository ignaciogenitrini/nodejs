/**
 * El térmico callback-hell hace referencia a la utilización continua de callbacks dentro de otros callbacks que hace dificil la lectura del código y poco escalable.
 */

const empleados = [
    {   
        id: 1,
        nombre: 'Ignacio'
    },
    {   
        id: 5,
        nombre: 'Matias'
    },
    {   
        id: 2,
        nombre: 'Lucia'
    },
    {   
        id: 10,
        nombre: 'Hernan'
    },
];

const salarios = [
    {   
        id: 1,
        salario: 1000
    },
    {   
        id: 5,
        salario: 3000
    },
    {   
        id: 2,
        salario: 5
    },
    {   
        id: 10,
        salario: 200
    },
];

const id_empleado = Math.floor(Math.random() * 11);
const id_salario = Math.floor(Math.random() * 11);

const getEmpleadoById = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);

    if (!empleado) {
        callback(true, 0);
    }

    callback(null, empleado);
} 

const getSalarioById = (id, callback) => {
    const salario = salarios.find(s => s.id === id);

    if (!salario) {
        callback(true, 0);
    }

    callback(null, salario);
}   

getEmpleadoById(id_empleado, (err, empleado) => {
    if (err === true && typeof empleado === 'number'){
        console.log("Error ! el empleado no existente");
    }   

    if (err == null && typeof empleado === 'object') {
        getSalarioById(id_empleado, (err, salario) => {
            if (err === true && typeof salario === 'number'){
                console.log("Error ! el salario no existente");
            }   
        
            if (err == null && typeof salario === 'object') {
                console.log(`El empleado ${empleado.nombre} tiene un salario de ${salario.salario}`);
            }
        });        
    }
});


