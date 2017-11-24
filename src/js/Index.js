import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import logo from '../img/logo.svg';
import '../css/Index.css';

class Index extends Component {
    render() {
        return (
            <div classID="index">
                <div className="header">
                        <div className="logo">
                            <img src={logo} />
                        </div>
                        <div className="title">
                            <h1>Tracker</h1>
                        </div>
                </div>
                <div className="content">
                    <div className="content-title">
                        <h1><span><strong>Track more. Worry less.</strong></span></h1>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                    </div>
                    <button><strong><Link to='/login' className="link">Log In</Link></strong></button>
                </div>
            </div>
        );
    }
}

export default Index;
