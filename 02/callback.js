// Funciones anónimas o callbacks son funciones que se pasan como arg a otra función.

const getUserByid = (id, callback) => {
    const user = {
        id, // como el id parametro va a ser asignado al id del objeto, es redundante, por lo cual le pasamos directamente el id.
        nombre: 'Nacho'
    }    

    setTimeout(() => {
        callback(user)
    }, 1000);
}

getUserByid(5, ({id, nombre}) => {
    console.log(`El id del usuario es: ${id} y el nombre es: ${nombre.toUpperCase()}`)
}); 

