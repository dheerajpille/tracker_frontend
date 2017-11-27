import React, { Component } from 'react';
import { Redirect } from 'react-router';

import icon from '../img/icon.svg';
import '../css/style.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleSignup = this.handleSignup.bind(this);
    }
    handleSignup(e) {
        e.preventDefault();
        fetch("https://tracker-backend-heroku.herokuapp.com/signup/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "first_name": this.refs.first_name.value,
                    "last_name": this.refs.last_name.value,
                    "email": this.refs.email.value,
                    "username": this.refs.username.value,
                    "password": this.refs.password.value
                })
            }
        )
        .then((response) => {
            if (response.status === 201) {
                this.setState({redirect: true});
        }
            return response.json();
        })
        .then((data) => {
            if (data.email !== undefined || data.username !== undefined || data.password !== undefined) {
                console.log(data.email);
                console.log(data.username);
                console.log(data.password);
            }
            console.log(data);
        });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to='/login' />
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
