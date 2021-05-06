const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


console.log(`--------------------`)
Captura.question(`Ingrese un numero: `, function(entrada){

    var arreglo = [] = entrada.split("");

    var arreglo_2 = new Array();

    var i = 1;

    var j = parseInt(arreglo.length) - 1;

    do {
        
        i = i - 1;

        arreglo_2[i] = arreglo[j];

        j = j - 1,

        i = i + 2;
        
    } while (i <= arreglo.length);
    
    i = arreglo.toString();
    j = arreglo_2.toString();

    console.log(i);
    console.log(j);

    if (i == j) {
        
        console.log(`--------------------`)
        console.log(`El Numero es Capicúa`)

    } else {
        
        console.log(`--------------------`)
        console.log(`El Numero no es Capicúa`)

    }


    Captura.close();
});
