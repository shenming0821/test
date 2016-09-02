/// <reference path="../../../typings/globals/node/index.d.ts" />
/// <reference path="../../../typings/globals/react/index.d.ts" />
/// <reference path="../../../typings/modules/lodash/index.d.ts" />
const Redux = require('redux');
const store = Redux.createStore(function redux(state, action) {
    if (typeof state == 'undefined') return {};
    switch (action.type) {
        case "changeName":
            return Object.assign({}, state, { name: action.name });
        default:
            return {};
    }
})

// first-------------------
const action = {
    type: "changeName",
    name: "haha"
}

store.dispacth(action);

const action2 = {
    type: "changeName",
    name: "hehe"
}

// second-------------------

function actionCreator(name) {
    return {
        name,
        type: "changeName"
    }
}

store.dispacth(actionCreator("haha"));
store.dispacth(actionCreator("hehe"));

// three---------------------

function createAction(action, dispacth) {
    return function (opt) {
        action = Object.assign({}, action, opt, { type: action.type });
        dispacth(action);
    }
}

var action = createAction({ type: 'changeName', name: 'haha' }, store.dispacth);

action();
action({ name: "hehe" });

// four-----------------------

function createActions(actions, dispacth) {
    function createAction(action, dispacth) {
        return function (opt) {
            action = Object.assign({}, action, opt, { type: action.type });
            dispacth(action);
        }
    }
    
    if(typeof actions == "function"){
        return createAction(actions,dispacth);
    } else {
        let result = {};
        for (let k in actions){
           result[k] = createAction(actions[k],dispacth);
        }
        return result;
    }
}

let a = {type: 'a'};
let b = {type: 'b'};
let c = {type: 'c'};

actions.a();
actions.b();

// redux---------------

function a(name,id){
    return{
        type: 'a',
        name,
        id
    }
}

function b(name){
    return{
        type: 'b',
        name
    }
}

let actions = Redux.bindActionCreators({a,b},store.dispacth);

actions.a('haha',"id001");