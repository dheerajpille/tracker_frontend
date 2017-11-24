import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/Home.css';

function LoginButton() {
    return (
        <button>Log In</button>
    );
}

class Home extends Component {
    render() {
        let loginButton = null;
        loginButton = <LoginButton />;
        return (
            <div>
                <div className="header">
                    <div className="title">
                        <img src={logo} />
                        <h1>Tracker</h1>
                    </div>
                </div>
                <br />
                <div className="content">
                    <div className="content-title">
                        <h2>Track more. Worry less.</h2>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                        <br />
                        {loginButton}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
