const List = require('./List');
const ReactDOM = require('react-dom');
const React = require('react');
const Dispacther = require('./Dispatcher');

Dispacther.use(function log(){
    setTimeout(function() {
        console.log('log----',action.actionType);
        next();
    }, 1000);
}).use(function example(){
    setTimeout(function() {
        console.log('example----',action.actionType);
        next();
    }, 1000);
})

ReactDOM.render(<List />,document.body);