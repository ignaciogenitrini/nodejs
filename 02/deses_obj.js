// Desestructuración de objetos

const Heroe = {
    alias: 'Superman',
    edad: 30,
    poder: 'Volar',
    nombre: 'Clark Ken',
    getNombre() { return `El nombre real de Superman es: ${this.nombre}`}  
}

//const {nombre, edad, poder} = Heroe;
//console.log(`Heroe data: Nombre: ${nombre} Poder: ${poder} Edad: ${edad}`)

// Desestructuramos el objeto y obtenemos los valores que queremos al pasar el heroe (objeto) como parametro
const HeroeData = ({nombre, edad, poder}) => {
    return `Heroe data: Nombre: ${nombre} Poder: ${poder} Edad: ${edad}`;
}

console.log(HeroeData(Heroe));

// Desestructuración de arrays

const Heroes = ['Batman', 'Superman', 'Deadpool'];
const [, heroe2 , ] = Heroes; // definimos el nombre de la variable del valor que queremos obtener al desestructurar el array

console.log(heroe2);