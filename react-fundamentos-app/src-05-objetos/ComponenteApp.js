import React from'react'

const persona = {
    nombre: 'Jose Andres',
    apellido: 'Neiva Marquez',
    email: 'joseneivam@hotmai.com'
}

const ComponenteApp = () => {

    console.log('Componente con objetos');

    return (
        <>
        <h1>Saludos desde un funcional component's React</h1>
        <h5>Retorno Multilinead de un componente</h5>
        <hr></hr>
        <p>Esta es una configuracion  para un componente multimedia</p>
        <hr></hr>
        <p>Objeto persona: {persona.nombre} {persona.apellido}</p>
        <p>Email: {persona.email}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
}

export default ComponenteApp;