import React from 'react';
import ReactDOM from 'react-dom';

//HOJA DE ESTILOS

import './index.css';

//Componentes creados
import ComponenteApp from './ComponenteApp';


const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteApp parm01= '0001' parm02= 'XXXXX000002'/ >, divRoot);