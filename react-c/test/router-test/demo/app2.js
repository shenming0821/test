import {Router, Route, Link} from 'react-router';
import React from 'react';
import {render} from 'react-dom';

const App = React.createClass({
    render() {
        return (
            <div>
                <Link to="/aaa">A</Link><span> | </span>
                <Link to="/bbb">B</Link><span> | </span>
                <Link to="/ccc">C</Link><span> | </span>
                
                <ul>
                    <li><Link to="/bbb/b1">B1</Link></li>
                    <li><Link to="/bbb/b2">B2</Link></li>
                </ul>

                <hr/>
                <div>{this.props.children}</div>
            </div>
        );
    }
});

const A = React.createClass({
    render() {
        return (
            <h4>AAAA</h4>
        )
    }
});
const B = React.createClass({
    render() {
        return (
            <ul>
                <li>
                    {this.props.children}
                </li>
            </ul>
        )
    }
});
    const B1 = React.createClass({
        render() {
            return (
                <h4>{this.props.params.name}B1B1</h4>
            )
        }
    });
    const B2 = React.createClass({
        render() {
            return (
                <h4>B2B2</h4>
            )
        }
    });
const C = React.createClass({
    render() {
        return (
            <h4>CCCC</h4>
        )
    }
});

render(
    <Router>
        <Route path="/" component={App}>
            <Route path="aaa/*.jpg" component={A} />
            <Route path="bbb" component={B}>
                <Route path="b1/:name" component={B1} />
                <Route path="b2(/:name)" component={B2} />
            </Route>
            <Route path="ccc" component={C} />
        </Route>
    </Router>
    , document.body
)