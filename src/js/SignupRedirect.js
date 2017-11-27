import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon from '../img/icon.svg';
import '../css/style.css';

class SignupRedirect extends Component {
    render() {
        if (!sessionStorage['signupredirect']) {
            return (<div>404</div>);
        }
        return (
            <div>
                <div className="header">
                    <div className="icon">
                        <img src={icon} alt={icon} />
                    </div>
                    <div className="title">
                        <h1>Tracker</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h3><span><strong>Tracker Redirect</strong></span></h3>
                    </div>
                    <div className="content-body">
                        <p><strong>Created a new User with the following credentials:</strong></p>
                    </div>
                    <button><strong><Link to='/login/' className="link">Redirect to Login</Link></strong></button>
                </div>
            </div>
         );
    }
}

export default SignupRedirect;
