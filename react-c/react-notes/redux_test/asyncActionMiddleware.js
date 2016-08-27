"use strict";

const Redux = require("redux");

const logger = store => nextDispatch => action => {
    console.log("start", action.type);
    let result = nextDispatch(action);
    console.log("end", action.type);
    return result;
};

//  one way  thunk
const thunk = store => nextDispatch => action => {
    if (typeof action === "function") {
        action(nextDispatch);
    } else {
        nextDispatch(action);
    }
};

// two way promise
const promise = store => nextDispatch => action => {
    if (action instanceof Promise) {
        action.then(function (action) {
            nextDispatch(action);
        })
    } else {
        nextDispatch(action);
    }
};



// javascript es6 实战
const generator = store => nextDispatch => action => {
    if (typeof action === "function" && action.constructor.name === "GeneratorFunction") {
        let g = action();
        let v = g.next(); // v {done:true,value:new promise()}
        function run(v) {
            if (v.done) {
                nextDispatch(v.value) // action
            } else {
                if (v.value && v.value instanceof Promise) {
                    v.value.then(function (name) {
                        run(g.next(name)); // leo
                    })
                } else {
                    nextDispatch(v.value);
                }
            }
        }
        run(v);
    }
};


const asyncMiddleware = store => nextDispatch => action => {
    if (typeof action === "function") {
        // generator action
        if (action.constructor.name === "GeneratorFunction") {

            let g = action();
            let v = g.next(); // v {done:true,value:new promise()}
            function run(v) {
                if (v.done) {
                    nextDispatch(v.value) // action
                } else {
                    if (v.value && v.value instanceof Promise) {
                        v.value.then(function (name) {
                            run(g.next(name)); // leo
                        })
                    } else {
                        nextDispatch(v.value);
                    }
                }
            }
            run(v);
        } else {
            action(nextDispatch); // thunk action
        }
    } else if (action instanceof Promise) {  // promise
        action.then(function (action) {
            nextDispatch(action);
        })
    } else {
        nextDispatch(action);
    }
};


const createStore = Redux.applyMiddleware(asyncMiddleware, logger)(Redux.createStore);

function thunkAction(name) {
    return dispatch => {
        setTimeout(function () {
            dispatch({
                type: "changeName",
                name
            });
        }, 3000);
    }
}

function promiseAction(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function (params) {
            resolve({
                type: "changeName",
                name
            });
        }, 3000);
    });
}

// generator action
// function* generatorAction() {

//     let name = yield new Promise(function (resolve, reject) {
//         setTimeout(function (params) {
//             resolve("leo");
//         }, 1000);
//     });
//     return {
//         name,
//         type: "changeName"
//     }
// }


function gAction(name) {
    return function* generatorAction() {

        let name = yield new Promise(function (resolve, reject) {
            setTimeout(function (params) {
                resolve("leo");
            }, 1000);
        });

        return {
            name,
            type: "changeName"
        }
    }
}

function reducer(state, action) {
    if (typeof state === "undefined") return { name: "" };
    switch (action.type) {
        case "changeName":
            return { name: action.name }
        default:
            return state;
    }
}

const store = createStore(reducer, { name: "" });

store.subscribe(() => {
    console.log("result => ", store.getState());
});

// store.dispatch(thunkAction("zengliang"));
store.dispatch(promiseAction("zengliang"));
// store.dispatch(gAction())

console.log("first");




