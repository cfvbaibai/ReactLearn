import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './ttt.js'
import Clock from './clock'
import LoginControl from './login'
import Form from './form'
// import Calculator from './tempcalc.js'

// ========================================

ReactDOM.render(
    <div>
        <LoginControl onClick={() => { }} />
        <Clock />
        <Form />
        <Game />
    </div>,
    document.getElementById('root')
);
