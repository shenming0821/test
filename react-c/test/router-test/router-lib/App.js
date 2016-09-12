import React from "react";
import Navbar from "./navbar";
import _UserList from './UserList';
import {connect, Provider} from "react-redux";

export default connect(state => state)(React.createClass({

    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}));