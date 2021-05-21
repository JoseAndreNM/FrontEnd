import React from 'react';
import ReactDOM from 'react-dom';

//HOJA DE ESTILOS

import './index.css'


const saludo = <h1>Hola desde App Fundamentos React</h1>;

const divRoot = document.querySelector('#root');

ReactDOM.render(saludo, divRoot);