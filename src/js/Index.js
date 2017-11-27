import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon from '../img/icon.svg';
import '../css/style.css';

class Index extends Component {
    render() {
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
                        <h1><span><strong>Track more. Worry less.</strong></span></h1>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                    </div>
                    <button><strong><Link to='/login' className="link">Log in to Tracker</Link></strong></button>
                    <button><strong><Link to='/signup' className="link">Sign up for Tracker</Link></strong></button>
                </div>
            </div>
        );
    }
}

export default Index;
