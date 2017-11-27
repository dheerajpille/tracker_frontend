import React, { Component } from 'react';

import icon from '../img/icon.svg';
import '../css/style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        sessionStorage['username'] = this.refs.username.value;
        sessionStorage['password'] = this.refs.password.value;
        fetch("https://tracker-backend-heroku.herokuapp.com/login/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": sessionStorage['username'],
                    "password": sessionStorage['password']
                })
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.username !== undefined || data.password !== undefined) {
                // Check for error messages here
                console.log(data.username);
                console.log(data.password);
            } else {
                console.log(data.non_field_errors);
            }
        });
        fetch("https://tracker-backend-heroku.herokuapp.com/o/token/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:
                "client_id=iulHMYsNYKc9swHJvJlWvz8WMJWwbWbscF1OuUMr&" +
                "client_secret=aOOzlyOQZW5GhSa8yQczlgzN9QcHeCDl5QSp7HTp2G587X5Y56jucR7wbblHYkS0dVoqULhAzhYTFhX46YL7aJ29qpCR3vkJOPwAM8ngPuNLsyzSh35wDHXGBNr7ZTDJ&" +
                "username=" + sessionStorage['username'] + "&" +
                "password=" + sessionStorage['password'] + "&" +
                "grant_type=password"
            }
        )
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            sessionStorage['token_type'] = data.token_type;
            sessionStorage['access_token'] = data.access_token;
            sessionStorage['refresh_token'] = data.refresh_token;
            console.log(sessionStorage['token_type']);
            console.log(sessionStorage['access_token']);
            console.log(sessionStorage['refresh_token']);
        });
    }
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
                        <h3><span><strong>Tracker Log In</strong></span></h3>
                    </div>
                    <form onSubmit={this.handleLogin}>
                        <label>
                            <input type="text" ref="username" name="username" placeholder="username" />
                        </label>
                        <br />
                        <label>
                            <input type="password" ref="password" name="password" placeholder="password" />
                        </label>
                        <br />
                        <button type="submit"><strong>Log In</strong></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
