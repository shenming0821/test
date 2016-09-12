import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import Login from './Login';
import _UserList from './UserList';
import reducer from './reducer';
import {createStore} from "redux";
import { Router, Route, Link, browserHistory } from 'react-router';

import {connect, Provider} from "react-redux";


const UserList = connect(state => state)(_UserList);

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="about" component={About} />
                <Route path="users" component={UserList} />
                <Route path="login" component={Login} />
            </Route>
        </Router>
    </Provider>
    , document.body
)