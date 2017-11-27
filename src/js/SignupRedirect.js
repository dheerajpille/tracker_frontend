import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon from '../img/icon.svg';
import '../css/style.css';

class SignupRedirect extends Component {
    render() {
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
                    <form>
                        <label>
                            <input type="text" ref="first_name" name="first_name" placeholder="first_name" />
                            <input type="text" ref="last_name" name="last_name" placeholder="last_name" />
                        </label>
                        <br />
                        <label>
                            <input type="text" ref="email" name="email" placeholder="email" />
                        </label>
                        <br />
                        <label>
                            <input type="text" ref="username" name="username" placeholder="username" />
                            <input type="password" ref="password" name="password" placeholder="password" />
                        </label>
                        <br />
                        <button><strong><Link to='/login/' className="link">Redirect to Login</Link></strong></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignupRedirect;
