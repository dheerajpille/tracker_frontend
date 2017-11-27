import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/style.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(e) {
        e.preventDefault();
        if (!this.refs.first_name.value) {
            this.refs.first_name.value = " ";
        }
        if (!this.refs.last_name.value.length) {
            this.refs.last_name.value = " ";
        }
        fetch("https://tracker-backend-heroku.herokuapp.com/signup/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "email": this.refs.email.value,
                    "username": this.refs.username.value,
                    "password": this.refs.password.value
                })
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.email !== undefined || data.username !== undefined || data.password !== undefined) {
                console.log(data.email);
                console.log(data.username);
                console.log(data.password);
            }
            console.log(data);
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
                        <h3><span><strong>Tracker Sign Up</strong></span></h3>
                    </div>
                    <form onSubmit={this.handleSignup}>
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
                        <button type="submit"><strong>Sign Up</strong></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
