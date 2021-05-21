import React, { useState } from'react'

console.log('componente contador o acumulador')

const ContadorApp = ({valor_contador}) => {
    console.log('::ContadorApp::');


    const [contador, setContador] = useState(valor_contador)

    const contarClick = () => {
        setContador(contador + 1);
        console.log('contador: ', contador);
    }

    return(
        <>
            <h1>Contador component's React</h1>
            <h5>Acumulador de click</h5>
            <hr></hr>
            <h1>Contador: {contador}</h1>
            <button onClick={contarClick}>Contador + 1</button>
        
        </>
    )



}

export default ContadorApp;