import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/style.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(e) {
        e.preventDefault();
        fetch("https://tracker-backend-heroku.herokuapp.com/login/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": this.refs.username.value,
                    "password": this.refs.password.value
                })
            }
        )
        .then(function(response) {
            // The response is a Response instance.
            // You parse the data into a useable format using `.json()`
            return response.json();
        }).then(function(data) {
            // `data` is the parsed version of the JSON returned from the above endpoint.
            console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
        });
    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <img src={logo} alt={logo} />
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
