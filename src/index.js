import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Index from './js/Index';
import Login from './js/Login'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={Index} />
            <Route path='/login/' component={Login} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
