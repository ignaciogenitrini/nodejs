/* Let - var - const

Se recomienda como buena práctica utilizar const ya que respeta el scope de la variable.
Si se que va a cambiar utilizo let.
No utilizar var ya que genera errores y incongruencias en el código
*/

// const

const name = "Nacho";

if (true) {
    const name = "Matias"; // esta constante esta en desuso
}

//console.log(name);

// let

let name2 = "Ignacio";

if (name2.length > 0) {
    let name2 = "Lautaro";

    console.log(name2);
} else {
    console.log(name2);
}


