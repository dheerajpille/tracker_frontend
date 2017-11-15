import React, { Component } from 'react';
import logo from './logo.svg';
import banner from './banner.png'
import './App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="title">
                        <h1>Tracker</h1>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><h3>Overview</h3></li>
                            <li><h3>Login</h3></li>
                        </ul>
                    </div>
                </div>
                <br />
                <div className="content">
                    <code>python manage.py makemigrations</code>
                    <h2>Create your own ideas</h2>

                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>Find time for yourself</p>
                </div>
                <br />
                <footer>Created by Dheeraj Pille</footer>
            </div>
        );
    }
}

export default Home;
