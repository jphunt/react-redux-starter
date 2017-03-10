import React, { Component } from 'react';
import { Link } from 'react-router'

class Login extends Component {
    render() {
        return (
            <div>
                <Link to="/" activeStyle={{ color: 'red' }}>root</Link>
                <Link to="/login" activeStyle={{ color: 'red' }}>login</Link>
                <Link to="/login/1" activeStyle={{ color: 'red' }}>login1</Link>
                <h1>Login page</h1>
            </div>
        );
    }
}

export default Login;