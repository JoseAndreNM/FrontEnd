import React, { useState } from'react'

console.log('componente contador o acumulador')

const ContadorApp = ({valor_contador}) => {
    console.log('::ContadorApp::');


    const [contador, setContador] = useState(valor_contador)

    const funcionSUMAR = () => {
        setContador(contador + 1);
        console.log('contador: ', contador);
    }

    const funcionRESTAR = () => {
        setContador(contador - 1);
        console.log('contador: ', contador);
    }

    const funcionREINICIAR = () => {
        setContador(valor_contador);
        console.log('contador: ', contador);
    }

    return(
        <>
            <h1>Contador component's React</h1>
            <h5>Acumulador de click</h5>
            <hr></hr>
            <h1>Contador: {contador}</h1>
            <button onClick={funcionSUMAR}>SUMAR + 1</button>
            <button onClick={funcionREINICIAR}>:REINICIAR:</button>
            <button onClick={funcionRESTAR}>RESTAR - 1</button>
        
        </>
    )



}

export default ContadorApp;