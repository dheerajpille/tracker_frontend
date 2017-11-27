import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import Index from './js/Index';
import Login from './js/Login';
import Signup from './js/Signup'
import SignupRedirect from './js/SignupRedirect';
import Dashboard from './js/Dashboard';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Index} />,
                    <Route path='/login/' exact component={Login} />
                    <Route path='/signup/' exact component={Signup} />
                    <Route path='/signup/redirect/' exact component={SignupRedirect} />
                    <Route path='/dashboard/' exact component={Dashboard} />
                    <Route path='/*' exact component={Index} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
    