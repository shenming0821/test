'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');

const {connect, Provider} = require("react-redux");

function reducer(state, action) {
    if (typeof state === "undefined") return { name: "abc", num: 0 };
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, action.payload);
        case "access":
            return Object.assign({}, state, { num: state.num + 1 });
        default:
            return state;
    }
}

const store = Redux.createStore(reducer);

let actions = {
    changeName(name) {
        return {
            type: "changeName",
            payload: { name }
        }
    },
    access() {
        return {
            type: "access"
        }
    }
}

// store.dispatch(actions.changeName("hehe"));

actions = Redux.bindActionCreators(actions, store.dispatch);

//------------------------------------------------------------------------

let UI = React.createClass({
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.num}</p>
                <input onChange={ event => this.props.changeName(event.target.value) } />
                <button onClick={ event => this.props.access() }>access</button>
            </div>
        )
    }
});


function mapStateToProps(state) {
    return state;
}

function mapDispatchTpProps() {
    return actions;
}

UI = connect(mapStateToProps, mapDispatchTpProps)(UI);

ReactDOM.render(<Provider store={store}><UI /></Provider>, document.body);
// function render() {
//     let state = store.getState();
//     ReactDOM.render(<UI changeName = {actions.changeName} access={actions.access} name={state.name} num={state.num} />, document.body);
// }

// store.subscribe(render);

// render();