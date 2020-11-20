import ReactDOM from 'react-dom';
import './index.css';
import Game from './ttt.js'
import Clock from './clock.js'
import LoginControl from './login.js'
import Form from './form.js'
// import Calculator from './tempcalc.js'

// ========================================

ReactDOM.render(
    (
        <div>
            <LoginControl />
            <Clock />
            <Form />
            <Game />
        </div>
    ),
    document.getElementById('root')
);
