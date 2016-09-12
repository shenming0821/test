import React from "react";
import _Navbar from "./navbar";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";
import actions from './action';
import UserList from './UserList';

export default React.createClass({
    render() {
        const usersdom = this.props.users.map(user => <li>{user.name}</li>);
        
        return (
            <ul>
                {usersdom}
            </ul>
        );
    }
})