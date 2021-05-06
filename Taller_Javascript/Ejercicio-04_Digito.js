let preguntas = ['Ingrese un Numero: ', 'Ingrese un Digito: '];
let arregloNumero = [];

const Preguntar = (i)  => {

    console.log(preguntas[i]);
}

process.stdin.on('data', (d) => {   

    arregloNumero.push(d.toString().trim()) 

    if(arregloNumero.length < preguntas.length){

        Preguntar(arregloNumero.length)
    }
    else {

        buscar(arregloNumero[0], arregloNumero[1]);
        process.exit();
    }
})

const buscar = (num, b) => {

    respuesta = num.indexOf(b)  

    if(respuesta != -1){

        console.log(`-------------------------------------------`);
        console.log(`El digito se encontro en el numero`);
    }
    else {

        console.log(`-------------------------------------------`);
        console.log('No se encontro el digito en el numero');
    }
}

Preguntar(0);
