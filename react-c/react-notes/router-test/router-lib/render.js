import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import reducer  from "./reducer";
import {createStore} from "redux";
import { Router, Route, Link ,browserHistory} from 'react-router'
import About from "./About";
import Login from "./Login";
import _UserList from "./UserList";
import { connect , Provider } from "react-redux";


const UserList = connect(state=>state)(_UserList);


const store = createStore(reducer);
// React.createElement
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        <Route path="about" component={About}/> 
        <Route path="users" component={UserList}/>
        <Route path="login" component={Login}/>
        </Route>
    </Router>
  </Provider>
,document.body)
