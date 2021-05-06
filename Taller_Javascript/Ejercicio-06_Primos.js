const { match } = require('assert');
const readline = require('readline');

let Captura = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


console.log(`--------------------`)
Captura.question(`Ingrese un numero: `, function(entrada){



    var bool=true;

    for (var i = 2; i <= entrada/2; i++) {

        if ((entrada % i) == 0) {

            bool = false;
        
        }
    }

    if(bool){

        console.log(`-----------------------`);
        console.log(`El Numero es primo`);         

    }else{

        console.log(`-----------------------`);
        console.log(`El Numero no es primo`);
    }    

    
    Captura.close();
});
