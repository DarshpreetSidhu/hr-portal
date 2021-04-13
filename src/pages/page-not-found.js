import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>The page you are looking is not available.</h1>
                <NavLink to="/"><h1>Go Back</h1></NavLink>
            </div>
        );
    }
}

export default PageNotFound;