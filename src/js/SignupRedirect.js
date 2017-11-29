import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon from '../img/icon.svg';
import '../css/style.css';

class SignupRedirect extends Component {
    render() {
        if (!sessionStorage['signup_redirect']) {
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
                        <p>New User created!</p>
                        <p><strong>username: </strong>{sessionStorage['username']}</p>
                        <p><strong>email: </strong>{sessionStorage['email']}</p>
                    </div>
                    <Link to='/login/' className="link"><button><strong>Redirect to Login</strong></button></Link>
                </div>
            </div>
         );
    }
}

export default SignupRedirect;
