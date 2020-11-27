import React from 'react';

interface IClockProps {
    
}

interface IClockState {
    now: Date
}

class Clock extends React.Component<IClockProps, IClockState> {
    timer: NodeJS.Timeout;
    constructor(props) {
        super(props);
        this.state = { now: new Date() };
        this.timer = null;
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