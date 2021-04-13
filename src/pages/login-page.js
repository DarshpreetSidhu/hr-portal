import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <NavLink to="/Signup">go to signup page</NavLink>
            </div>
        );
    }
}

export default LoginPage;