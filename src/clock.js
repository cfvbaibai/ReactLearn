import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { now: new Date() };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({ now: new Date() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (<div>
            <h1>Hello, World!</h1>
            <h2>It is {this.state.now.toLocaleTimeString()}.</h2>
        </div>);
    }
}

export { Clock as default };