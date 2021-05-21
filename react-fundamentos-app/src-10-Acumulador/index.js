import React from 'react';
import ReactDOM from 'react-dom';

//HOJA DE ESTILOS

import './index.css';

//Componentes creados
import ContadorApp from './ContadorApp';


const divRoot = document.querySelector('#root');

ReactDOM.render(<ContadorApp valor_contador = {0} />, divRoot);