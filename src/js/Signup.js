import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/style.css';

class Signup extends Component {
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
                        <h3><span><strong>Tracker Sign Up</strong></span></h3>
                    </div>
                    <form method="post">
                        <label>
                            <input type="text" name="first_name" placeholder="first_name" />
                            <input type="text" name="last_name" placeholder="last_name" />
                        </label>
                        <br />
                        <label>
                            <input type="text" name="email" placeholder="email" />
                        </label>
                        <br />
                        <label>
                            <input type="text" name="username" placeholder="username" />
                            <input type="password" name="password" placeholder="password" />
                        </label>
                        <br />
                        <button type="submit"><strong>Sign Up</strong></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
