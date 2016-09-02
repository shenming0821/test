const Redux = require("redux");

const store = Redux.createStore(function reducer(state, action) {
    if (typeof state === "undefined") return {};
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, { name: action.name });
        default:
            return {};
    }
});

// ---------------------  one
const action = {
    type: "changeName",
    name: 'leo'
};


store.dispatch(action);

const action2 = {
    type: "changeName",
    name: 'liangzeng'
}


// ------------------- two
function actionCreator(name) {
    return {
        name,
        type: "changeName"
    }
}


store.dispatch(actionCreator("leo"));
store.dispatch(actionCreator("liangzeng"));

// ------------------- three

function createAction(action, dispatch) {
    return function (opt) {
        action = Object.assign({}, action, opt, { type: action.type });
        dispatch(action);
    }
}


var action = createAction({ type: "changeName", name: "leo" }, store.dispatch);

action();
action({name:"zengliang"});


// --------------------- four

function createActions(actions, dispatch) {

    function createAction(action, dispatch) {
        return function (opt) {
            action = Object.assign({}, action, opt, { type: action.type });
            dispatch(action);
        }
    }

    if (typeof actions === 'function') {
        return createAction(actions, dispatch);
    } else {
        let result = {};
        for (var k in actions) {
            result[k] = createAction(actions[k], dispatch);
        }
        return result;
    }

}


let a = { type: "a" };
let b = { type: "b" };
let c = { type: "c" };


let actions = createActions({ a, b, c }, store.dispatch);

actions.a();
actions.b();


// ---------------------  finish

function a(name,id) {
    return {
        type: "a",
        name,
        id
    }
}


function b(name) {
    return {
        type: "b",
        name
    }
}


let actions = Redux.bindActionCreators({a,b},store.dispatch);

actions.a("leo",'id001');
