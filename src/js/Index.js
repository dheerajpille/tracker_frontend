import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/Index.css';
import '@shopify/polaris/styles.css';

class Index extends Component {
    render() {
        return (
            <div>
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
                    <button><strong>Log In</strong></button>
                </div>
            </div>
        );
    }
}

export default Index;