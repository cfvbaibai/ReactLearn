import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = { 
            name: null,
            submitted: false
        };
    }

    onSubmit = (e) => {
        this.setState({submitted: true});
        e.preventDefault();
    }

    onChange = (e) => {
        this.setState({ name: e.target.value });
    }

    render() {
        const welcome = this.state.submitted && this.state.name && <div>Welcome: {this.state.name}</div>;
        return (
            <div style={{ marginBottom: 10 }}>
                <form onSubmit={this.onSubmit}>
                    <label>Name: <input type="text" onChange={this.onChange} /></label>
                    <button type="submit">Submit</button>
                </form>
                {welcome}
            </div>
        );
    }
}
export { Form as default };