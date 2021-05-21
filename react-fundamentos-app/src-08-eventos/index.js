import React from 'react';
import ReactDOM from 'react-dom';

//HOJA DE ESTILOS

import './index.css';

//Componentes creados
import ComponenteEventoApp from './ComponenteEventoApp';


const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEventoApp />, divRoot);