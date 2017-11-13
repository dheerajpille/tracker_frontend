import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Tracker</h1>
                    <h2>An intuitive expense tracker built for modern times</h2>
                </header>
                <h1>
                    Tracker
                </h1>

                <code>python manage.py makemigrations</code>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default Home;
