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

const getEmpleadoInfo = async (id) => { // para utilizar asyn await, debe ser una funcion asincrona
    try {
        const empleado = await getEmpleadoById(id); // para utilizar await, debemos utilizar una funcion promesa 
        const salario = await getSalarioById(id); //para utilizar await, debemos utilizar una funcion promesa 

        return `El empleado con id: ${empleado.id} tiene un salario de: ${salario.salario}`;
    } catch (error) {
        throw error; // al utilizar throw hacemos uso al reject de las promesas y obtenemos el response
    }
}

getEmpleadoInfo(id_empleado) // al ser una funcion asincrona podemos acceder directamente a los metodos then y catch
    .then(msg => console.log(msg)) // hacemos uso del resolve las promesas 
    .catch(err => console.log(err)); // al utilizar throw hacemos uso al reject de las promesas y utilizamos el response