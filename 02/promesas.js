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

const getEmpleadoById = (id) => {   
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);

        (empleado) 
            ? resolve(empleado) 
            : reject(`No existe el empleado con id: ${id}`);
    }); 
} 

const getSalarioById = (id) => {   
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);

        (salario) 
            ? resolve(salario) 
            : reject(`No existe el salario con id: ${id}`);
    }); 
} 

/** Promesas en cadena */
let nombre_empleado;

getEmpleadoById(id_empleado)
    .then(e => {
        nombre_empleado = e.nombre; // utilizamos una variable global para poder utilizar el nombre en la respuesta del salario
        return getSalarioById(e.id) // al utilizar un return + metodo que devuelve otra promesa podemos utilizar nuevamente el then
    })
    .then((s) => console.log(`El empleado ${nombre_empleado} tiene un salario de: ${s.salario}`))
    .catch(err => console.log(err)); // utilizamos un solo catch general para matchear los errores

/** Promesas hell 

getEmpleadoById(id_empleado)
    .then(e => {
        getSalarioById(e.id)
        .then(s => console.log(`El salario del empleado ${e.nombre} es de ${s.salario}`))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
    
*/

