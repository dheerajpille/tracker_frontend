import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

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
        this.handleExpense = this.handleExpense.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleExpense(e) {
        e.preventDefault();
        fetch("https://tracker-backend-heroku.herokuapp.com/tracker/user/"+sessionStorage['id']+"/expense/create/",
            {
                method: 'post',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + sessionStorage['access_token']
                },
                body: JSON.stringify({
                    "category": this.refs.category.value,
                    "type": this.refs.type.value,
                    "value": this.refs.value.value
                })
            }
        )
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
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
                            <Link to='/dashboard/' className="link"><li><a className="nav-link"><strong>Dashboard</strong></a></li></Link>
                            <Link to='/dashboard/' className="link"><li><a className="nav-link"><strong>User</strong></a></li></Link>
                            <Link to='/signup/' className="link"><li><a className="nav-link"><strong>Expenses</strong></a></li></Link>
                            <Link to='/signup/' className="link"><li><a className="nav-link"><strong>Reports</strong></a></li></Link>
                        </ul>
                    </div>
                    <button className="log-out" onClick={this.handleLogout}><strong>Log Out</strong></button>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h1><span><strong>Dashboard</strong></span></h1>
                    </div>
                    <div className="content-body">
                        <p>Insert an expense below.</p>
                    </div>
                    <form onSubmit={this.handleExpense}>
                        <label>
                            <input type="text" ref="category" name="category" placeholder="category" />
                            <input type="text" ref="type" name="type" placeholder="type" />
                            <input type="number" ref="value" name="value" placeholder="value" step="0.01" />
                        </label>
                        <br />
                        <button type="submit"><strong>Create Expense</strong></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Dashboard;
