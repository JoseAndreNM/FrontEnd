console.log('+-----------------------BUCLES------------------------+');

let limiteBucle = 10;
let contador = 0;
 
console.log('+ Bucle: Do While');
do{
    contador ++;
    console.log('contador: '+contador);

}while (contador < limiteBucle);

console.log('+ Bucle: While');
let letCondicion = true;

let contadorBucle = 0;
let suma = 0;
while (letCondicion) {

    contadorBucle ++;

    let letRandom = Math.random() * 10;
    suma = suma + letRandom;
    console.log('Numero Randomico: '+ letRandom);

    

    if(letRandom > 5){
        letCondicion = false;
        console.log('Salida del Bucle: '+ letCondicion);
    }
}

console.log('Contador del bucle: ' + contadorBucle );
console.log('Suma de los numeros Randomicos: '+ suma);



console.log('+ Bucle: For');

suma = 0;

let limite = 6;
let i = 1;



for (let conta = 0; conta < limite; conta++) {
    
    let letRandom2 = Math.random();

    console.log('Numero '+i+': '+ letRandom2);
    suma = suma + letRandom2;

    console.log('Total Acumulado: '+ suma);

    i ++;
    
}

