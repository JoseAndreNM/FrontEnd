import React from'react'

console.log('componente capturador de evento en pantalla')

const ComponenteEventoApp = () => {
    console.log('::ComponenteEventoApp::');

    const eventoClick = (e) => {
        console.log(e)
    }

    return(
        <>
            <h1>Eventos component's React</h1>
            <h5>Capturador evento click</h5>
            <hr></hr>
            <button onClick={eventoClick}>Click aqui</button>
        
        </>
    )



}

export default ComponenteEventoApp;