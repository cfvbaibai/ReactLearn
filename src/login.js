import React from 'react';

function UserGreetings(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreetings(props) {
    return <h1>Please sign up!</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreetings />;
    }
    return <GuestGreetings />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false }
    }
    handleLoginClick = () => { this.setState({ isLoggedIn: true }) }
    handleLogoutClick = () => { this.setState({ isLoggedIn: false }) }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = (<LogoutButton onClick={this.handleLogoutClick} />);
        } else {
            button = (<LoginButton onClick={this.handleLoginClick} />);
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export { LoginControl as default };