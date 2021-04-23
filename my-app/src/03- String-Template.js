console.log('+-----------------------STRING TEMPLATE------------------------+');

const apellido = 'Rodrigez';
let nombre = 'Harold Adrian';

let variablenum = 11;

console.log("señor "+apellido+" su multiplicacion es: "+(variablenum*7));

let stringtemplate = `STRING TEMPALTE: 
    Señor ${apellido} 
    su multiplicacion es: ${variablenum * 7}`;

console.log(stringtemplate);

console.log(`Llamado a una funcion desde String Template ==>> ${fx_randomico('XYZ')}`)

function fx_randomico(parmString){
    return `Numero Random: ${Math.random() * 100} Parametro >>>> ${parmString}`;
}