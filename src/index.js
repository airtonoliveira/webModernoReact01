import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Primeiro from './componentes/Primeiro';
import DefaultDoReact from './componentes/default-react/App';
import BomDia from './componentes/BomDia';
import Multi, {BoaNoite} from './componentes/Multiplos';
import Saudacao from './componentes/Saudacao';
import Pai from './componentes/Pai';
import Filho from './componentes/Filho'



ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >        
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
            <Filho nome="Pedro" />
        </Pai>
    </div>
, document.getElementById('root'));



//Componentes devem ter nome maiúsculo
//ReactDOM.render(<BomDia nome="Teste"/>, document.getElementById('root'));
/*

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
    </div>
, document.getElementById('root'));

ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Ana"/>
        <BoaNoite nome="João"/>
    </div>
    , document.getElementById('root'));
*/