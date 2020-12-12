import React from 'react';

interface IFormProps {

}

interface IFormState {
    name: string | null
    submitted: boolean   
}

class Form extends React.Component<IFormProps, IFormState> {
    constructor(props: IFormProps) {
        super(props);
        this.state = { 
            name: null,
            submitted: false
        };
    }

    onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        this.setState({submitted: true});
        e.preventDefault();
    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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