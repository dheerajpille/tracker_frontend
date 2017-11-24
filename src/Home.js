import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="title">
                        <img src={logo} />
                        <h1>Tracker</h1>
                    </div>
                </div>
                <br />
                <div className="content">
                    <div className="content-title">
                        <h2>Track more. Worry less.</h2>
                    </div>
                    <div className="content-body">
                        <h2>Waste no time finding your expenses.</h2>
                        <p>Track with Tracker and preserve your sanity.</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
