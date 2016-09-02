
const React = require("react");
const ReactDOM = require("react-dom");
const Redux = require("redux");
const { connect, Provider } = require("react-redux");

function reducer(state, action) {
    console.log("reducer", action.type);
    if (typeof state === "undefined") return { name: "", num: 0 };
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, action.payload);
        case "access":
            return Object.assign({}, state, { num: 1 + state.num });
        default: return state;
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

// store.dispatch(actions.changeName("leo"));
// actions = Redux.bindActionCreators(actions, store.dispatch);

//--------------------------------- 

let OPT = React.createClass({
    render() {
        return <div>
            <input onChange={event => this.props.changeName(event.target.value) } />
            <button onClick={event => this.props.access() }> access </button>
        </div>
    }
})

OPT = connect(null,actions)(OPT);

let UI = React.createClass({
    render() {
        return <div>
            <p>{this.props.name}</p>
            <p>{this.props.num}</p>
            <OPT />
        </div>
    }
});

function getState(state, props) {
    return store.getState();
}

// function getActions() {
//     return actions;  
// }

// connect(mapStateToProps,mapDispathToProps)
UI = connect(getState)(UI);

function render(name) {
    ReactDOM.render(<Provider store={store}><UI name={name}/></Provider>, document.body);
}


render("leo");


setTimeout(function () {
    render("zengliang")
}, 3000);

// function render() {
//     let state = store.getState();
//     ReactDOM.render(<UI changeName={actions.changeName} access={actions.access} name={state.name} num={state.num} />, document.body);
// }

// store.subscribe(render);

// render();