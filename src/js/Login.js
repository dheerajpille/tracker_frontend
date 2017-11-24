import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/Index.css';

class Login extends Component {
    render() {
        return (
            <div classID="login">
                <div className="header">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="title">
                        <h1>Tracker</h1>
                    </div>
                </div>
                <div className="content">
                    <form>
                        First name:
                        <input type="text" name="firstname" value="Mickey" />
                        Last name:
                        <input type="text" name="lastname" value="Mouse" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
