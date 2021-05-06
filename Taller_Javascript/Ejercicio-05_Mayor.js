const { match } = require('assert');
const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


console.log(`--------------------`)
Captura.question(`Ingrese un numero: `, function(entrada){

    var arreglo = [] = entrada.split("");

    var resultado = 0;


        
    for (let i = 0; i < arreglo.length; i++) {
            
        for (let j = 0; j < arreglo.length; j++) {

            if (arreglo[i] > arreglo[j]) {
                
                if (arreglo[i] > resultado){
                    resultado = arreglo[i]
                }
            } 
        }      
            
    }

    console.log(`---------------------------------`);
    console.log(`El Numero Mayor es: ${resultado}`);
    
    Captura.close();
});
