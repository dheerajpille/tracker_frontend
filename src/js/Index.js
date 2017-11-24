import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/Index.css';
import '@shopify/polaris/styles.css';
import {DisplayText} from '@shopify/polaris';

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
                        <h1><strong>Track more. Worry less.</strong></h1>
                    </div>
                    <div className="content-body">
                        <p>Track your expenses with Tracker and enjoy life a little more.</p>
                    </div>
                    <button>Log In</button>
                </div>
            </div>
        );
    }
}

export default Index;
