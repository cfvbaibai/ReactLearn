import React from 'react';

function UserGreetings(props: GreetingProps) {
    return <h1>Welcome back!</h1>
}

function GuestGreetings(props: GreetingProps) {
    return <h1>Please sign up!</h1>
}

interface GreetingProps {
    isLoggedIn: boolean;
}

function Greeting(props: GreetingProps) {
    const isLoggedIn: boolean = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreetings isLoggedIn={true} />;
    }
    return <GuestGreetings isLoggedIn={false} />;
}

interface LoginButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>; 
}

function LoginButton(props: LoginButtonProps) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props: LoginButtonProps) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component<LoginButtonProps, GreetingProps> {
    constructor(props: LoginButtonProps) {
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