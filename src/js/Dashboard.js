import React, { Component } from 'react';
import { Redirect } from 'react-router';

import icon from '../img/icon.svg';
import '../css/style.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        if (sessionStorage.length === 0) {
            this.state = {
                redirect: true
            };
        } else {
            this.state = {
                redirect: false
            };
        }
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(e) {
        e.preventDefault();
        fetch("https://tracker-backend-heroku.herokuapp.com/o/revoke_token/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body:
                "client_id=iulHMYsNYKc9swHJvJlWvz8WMJWwbWbscF1OuUMr&" +
                "client_secret=aOOzlyOQZW5GhSa8yQczlgzN9QcHeCDl5QSp7HTp2G587X5Y56jucR7wbblHYkS0dVoqULhAzhYTFhX46YL7aJ29qpCR3vkJOPwAM8ngPuNLsyzSh35wDHXGBNr7ZTDJ&" +
                "token="+sessionStorage.access_token
            }
        )
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.clear();
                this.setState({redirect: true});
            }
        })
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to='/' />
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
                    <div className="nav-bar">
                        <ul>
                            <li><a className="nav-link"><strong>Expenses</strong></a></li>
                            <li><a className="nav-link">Reports</a></li>
                            <button onClick={this.handleLogout}><strong>Log Out</strong></button>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h1><span><strong>Dashboard</strong></span></h1>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
