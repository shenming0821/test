import React from "react";
import _Navbar from "./navbar";
import _UserList from './UserList';
import {connect, Provider} from "react-redux";
import actions from './action';
import About from './About';
import Login from './Login';


const Navbar = connect(null, actions)(_Navbar);
const UserList = connect(state => state)(_UserList);

export default connect(state => state, actions)(React.createClass({

    getCurrentPage() {
        switch (this.props.linkName) {
            case "about":
                return <About />;
            case "users":
                return <UserList />;
            case "login":
                return <Login />;
        }
    },

    render() {
        return (
            <div>
                <Navbar />
                {this.getCurrentPage() }
            </div>
        );
    }
}));