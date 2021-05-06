const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


console.log(`--------------------`)
Captura.question(`Ingrese un numero: `, function(entrada){

    var arreglo = [] = entrada.split("");

    var contador = 0;

    var i = 0;

    while (i < arreglo.length) {

        contador = contador + parseInt(arreglo[i]);
        
        i++;
    }

    console.log(`--------------------`)
    console.log(`Suma de los Digitos: ${contador}`);

    

    Captura.close();
});
