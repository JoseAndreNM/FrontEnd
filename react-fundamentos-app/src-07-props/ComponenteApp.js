import React from'react'


const persona = {
    nombre: 'Jose Andres',
    apellido: 'Neiva Marquez',
    email: 'joseneivam@hotmai.com'
}

const ComponenteApp = (props) => {

    console.log('Componente Parametros Props');
    console.log('Parametro 1: ', props.parm01);
    console.log('Parametro 2: ', props.parm02);
    console.log('Parametro 3: ', props.parm03);

    return (
        <>
        <h1>Parametros en component's React</h1>
        <h5>Multiparametros props</h5>
        <hr></hr>
        <p>Parametro 01 = {props.parm01} </p>
        <p>Parametro 02 = {props.parm02} </p>
        <p>Parametro 03 = {props.parm03} </p>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
}


ComponenteApp.defaultProps = {
    parm03: 'SIN VALOR'
}

export default ComponenteApp;