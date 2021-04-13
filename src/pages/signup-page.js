import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class SignupPage extends Component {
    render() {
        return (
            <div>
                <h1>Signup Page</h1>
                <NavLink to="/">Go back to login page </NavLink>
            </div>
        );
    }
}

export default SignupPage;