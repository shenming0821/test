'use strict';

const Redux = require("redux");


// const logger = store => nextDispatch => action => {
//     console.log("start", action.type);
//     let result = nextDispatch(action);
//     console.log("end", action.type);
//     return result;
// };

const thunk = store => nextDispatch => action => {
    if (typeof action === "function") {
        action(nextDispatch);
    } else {
        nextDispatch(action);
    }
}

// const thunk = function (store) {
//     console.log(store);
//     console.log(0);
//     return function (nextDispatch) {
//         return function (action) {
//             if (typeof action === "function") {
//                 action(nextDispatch);
//             } else {
//                 nextDispatch(action);
//             }
//         }
//     }
// }

function thunkAction(name){
    console.log(1);    
    return function(dispatch){
        dispatch({
            type: "changeName",
            name
        })
    }
}

const createStore = Redux.applyMiddleware(thunk)(Redux.createStore);
function reducer(state,action) {
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
})

store.dispatch(thunkAction("hehe"));

// function thunkAction(name) {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch({
//                 type: "chageName",
//                 name
//             })
//         }, 2000);
//     }
// }





// console.log("first");