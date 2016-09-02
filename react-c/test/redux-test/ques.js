'use strict';
const Redux = require("redux");

const thunk = store => nextDispatch => action => {
    if (typeof action === "function") {
        action(nextDispatch);
    } else {
        nextDispatch(action);
    }
}

function thunkAction(name) {
    return dispatch => {
        dispatch({
            type: "chageName",
            name
        })
    }
}

const createStore = Redux.applyMiddleware(thunk)(Redux.createStore);
function reducer() {
    if (typeof state == 'undefined') return {};
    switch (action.type) {
        case "changeName":
            return { name: action.name };
        default:
            return state;
    }
}
const store = createStore(reducer, { name: "" });


store.subscribe(() => {
    console.log("result =>", store.getState());
});
store.dispatch(thunkAction("hehe"));

