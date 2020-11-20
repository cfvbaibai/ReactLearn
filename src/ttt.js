import React from 'react';

function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    onSquareClick = i => {
        console.log(`Board.onSquareClick: ${i}`);
        return this.props.onSquareClick ? this.props.onSquareClick(i) : () => {};
    }

    renderSquare(i) {
        return (<Square
            value={this.props.squares[i]}
            onClick={this.onSquareClick.bind(this, i)}
        />);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}

class GameStatus extends React.Component {
    render() { return (<div style={{ width: "100px" }}>{this.props.status}</div>); }
}

class Game extends React.Component {
    constructor() {
        super();
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            history: [Array(9).fill(null)],
            turn: 'X',
            winner: null
        }
    }

    restartGame() {
        this.setState(this.getInitialState());
    }

    backStep() {
        if (this.state.winner) return;
        const state = this.state;
        state.history = state.history.slice(0, state.history.length - 1);
        this.setState(state);
    }

    onSquareClick = i => {
        if (this.state.winner) return;
        var squares = this.getLatestSquares();
        if (squares[i]) return;

        console.log(squares);
        squares = [...squares];
        squares[i] = this.state.turn;
        console.log(squares);
        const history = this.state.history
        history.push(squares);
        const winner = calculateWinner(squares);
        if (winner) {
            squares = squares.map(i => i ? i : '-');
        }
        this.setState({
            history: history,
            turn: this.state.turn === 'X' ? 'O' : 'X',
            winner: winner
        });
    }

    getLatestSquares() {
        return this.state.history[this.state.history.length - 1];
    }

    getStatus() {
        let status = '';
        if (this.state.winner) {
            status = `Winner: ${this.state.winner}`;
        } else {
            status = `Next player: ${this.state.turn}`;
        }
        return status;
    }

    render() {
        console.log(this.state.history);
        const backstepAllowed = this.state.history.length === 1 || this.state.winner;
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.getLatestSquares()} onSquareClick={this.onSquareClick} />
                </div>
                <div className="game-info">
                    <GameStatus status={this.getStatus()} />
                    <ol>{/* TODO */}</ol>
                </div>
                <div className="game-buttons">
                    <div><button onClick={() => this.restartGame()}>RestartGame</button></div>
                    <div><button onClick={() => this.backStep()} disabled={backstepAllowed}>Backstep</button></div>
                </div>
                <div className="game-log">
                    <ul>
                        {this.state.history.slice(1).map((squares, i) =>
                            <li key={i}>
                                <span>Step: {i + 1}</span>: <Board squares={squares} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.every(i => i)) {
        return '-';
    }
    return null;
}

export {Game as default};