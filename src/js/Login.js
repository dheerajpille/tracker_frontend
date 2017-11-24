import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/Index.css';

class Login extends Component {
    render() {
        return (
            <div classID="login">
                <div className="header">
                    <div className="title">
                        <h1>Pokemon</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h1><span><strong>Track more. Worry less.</strong></span></h1>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
