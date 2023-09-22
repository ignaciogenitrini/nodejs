const fs = require('fs');

const multiplicar = async (number, listar = false, hasta = 10) => {
    try {
        console.clear();

        let salida = '';
        for (let index = 0; index <= hasta; index++) {
            salida += `${number} x ${index} = ${number * index} \n`;
        }
        
        fs.writeFileSync(`./salida/tabla-${number}.txt`, salida);

        if (listar === true) {
            console.log('======');
            console.log('Tabla de', number);
            console.log('======');

            return salida;
        } else {
            return 'Archivo creado con éxito';
        }
    } catch (err) {
        throw err;
    }
}

module.exports = {
    multiplicar
}
