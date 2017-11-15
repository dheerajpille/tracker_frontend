import React, { Component } from 'react';
import logo from './logo.svg';
import banner from './banner.png'
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <div class="header">
                    <h1>Tracker</h1>
                </div>
                <img id={banner} src={banner} />
                <code>python manage.py makemigrations</code>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <footer>Created by Dheeraj Pille</footer>
            </div>
        );
    }
}

export default Home;
