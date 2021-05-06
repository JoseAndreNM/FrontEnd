const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


console.log(`--------------------`)
Captura.question(`Ingrese un numero: `, function(entrada){

    var arreglo = [] = entrada.split("");

    var contador = arreglo.length - 1;

    console.log(`--------------------`)
    console.log(`Numero Inverso:`);


    for (let i = 0; i < arreglo.length; i++) {
       
        console.log(arreglo[contador]);
        contador = contador - 1;
    }

    Captura.close();
});
