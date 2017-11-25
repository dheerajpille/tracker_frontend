import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/style.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="title">
                        <h1>Tracker</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h3><span><strong>Tracker Log In</strong></span></h3>
                    </div>
                    <div className="login-form">
                    <form method="post">
                        <label>
                            <input type="text" name="username" placeholder="username" />
                        </label>
                        <br />
                        <label>
                            <input type="password" name="password" placeholder="password" />
                        </label>
                        <br />
                        <button type="submit"><strong>Log In</strong></button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
