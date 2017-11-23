import React, { Component } from 'react';
import logo from './logo.svg';
import banner from './banner.png';
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
                    <h2>Overview</h2>
                    <p>
                        Tracker is a small-scale web `application created to efficiently track your expenses. Now, you
                        don't need to spend hours searching for bills or determining whether you surpassed your allotted
                        monthly budget on video games. Instead, just add your expenses to Tracker, and get a report on
                        what you spent your money on.
                    </p>
                    <p>
                        Simple and easy. Just the way you'd like it.
                    </p>
                    <hr />
                    <h2>Details</h2>
                    <p>
                        Tracker operates by integrating a React front-end and a Django back-end together to create this
                        fully functional web application. User and expense data is stored within a PostgreSQL database
                        that are accessed via API calls.
                    </p>
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                    <p>check out www.github.com</p>
                </div>
                <br />
            </div>
        );
    }
}

export default Home;
