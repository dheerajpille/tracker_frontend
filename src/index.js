import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Index from './js/Index';
import Login from './js/Login';
import Signup from './js/Signup';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Index} />,
                    <Route path='/login' exact component={Login} />
                    <Route path='/signup' exact component={Signup} />
                    <Route path='/*' exact component={Index} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
    