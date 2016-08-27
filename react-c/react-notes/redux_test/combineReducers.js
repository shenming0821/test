"use strict";

const Redux = require("redux");
const createStore = Redux.createStore;
// const combineReducers = Redux.combineReducers;

function combineReducers(reducers) {


    // var keys = Object.keys(reducers);

    return function reducer(state, action) {

        let newState = {  // return new state;

        }

        for (let key in reducers) {
            newState[key] = reducers[key](state[key], action);
        }

        return newState;
    }

};


// state -> { a:[] ,b:[] ,c: { name , group:[] } }

// actoin A -> {type,data(String)}

// const reducers = { a: function (state, action) { }, b: function (state, action) { } }

function aReducer(state, action) {
    if (typeof state === 'undefined') return [];
    switch (action.type) {
        case 'a':
            // state.push(action.data); x
            // return state;  x
            return state.concat([action.data]);
        default:
            return state;
    }
}

function bReducer(state, action) {
    if (typeof state === 'undefined') return [];
    switch (action.type) {
        case 'b':
            // state.push(action.data); x
            // return state;  x
            return state.concat([action.data]);
        default:
            return state;
    }
}

function cNameReducer(state, action) {
    if (typeof state === "undefined") return "";
    if (action.type === "c") {
        return action.name;
    } else {
        return state;
    }
}

function cGroupReducer(state, action) {
    if (typeof state === "undefined") return [];
    if (action.type === "c") {
        return state.concat(action.item);
    } else {
        return state;
    }
}

// cAction:{type,name,item}

function cReducer(state, action) {
    if (typeof state === 'undefined') return { name: '', group: [] };
    switch (action.type) {
        case 'c':
            return combineReducers({ name: cNameReducer, group: cGroupReducer })(state, action);
        default:
            return state;
    }
}

/**
 *  state {
 *     a 
 *     b 
 *     c:{list}
 *     group:[]
 *  }
 */

const reducer = combineReducers({ a: aReducer, b: bReducer, c: cReducer });

const store = createStore(reducer, { a: [111], b: [222], c: { name: "", group: [] } });

// store.dispatch(action);

store.subscribe(function listener() {
    console.log(store.getState());
});

let actionA = {
    type: 'a',
    data: 'leo'
};

let actionB = {
    type: 'b',
    data: 'zengliang'
};

let actionC = {
    type: "c",
    name: 'brighthas',
    item: "123"
}

store.dispatch(actionA);
store.dispatch(actionB);
store.dispatch(actionC);


