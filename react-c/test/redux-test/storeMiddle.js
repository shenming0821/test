'use strict';
const EventEmitter = require('events').EventEmitter;
class Store {
    constructor(state) {
        this._state = state || {};
        this._updates = {};
        this._emitter = new EventEmitter;
    }

    get state() {
        return JSON.parse(JSON.stringify(this._state));
    }

    // fns - function or object(多个function)
    setUpdates(fns) {
        this._updates = fns;
    }

    // action 外部调用通过action
    dispatch(action) {
        if (typeof this._updates === 'function') {
            this._state = this._updates(this._state, action); // return new State; 
        } else {
            let newState = {};
            const keys = Object.keys(this._updates);
            keys.forEach(key => {
                let updater = this._updates[key];
                let value = this._state[key];
                let newSubState = updater(value, action);
                newState[key] = newSubState;
            })
            this._state = Object.assign({}, this.state, newState);
        }
        this._emitter.emit('change');
    }
    listen(listener) {
        this._emitter.on('change', listener);
    }
}

function createStore(updaters, defaultState) {
    const sto = new Store(defaultState);
    sto.setUpdates(updaters);
    return sto;
}

const sto = createStore(
    {
        num: numUpdater,
        name: nameUpdater
    },
    {
        num: 5,
        name: 'abc'
    }
);

function numUpdater(oldNum, action) {
    switch (action.type) {
        case '+':
            return ++oldNum;
        case '-':
            return --oldNum;
        default:
            return oldNum;
    }
}

function nameUpdater(oldName, action) {
    if (action.type == 'changeName') {
        return action.name;
    } else {
        return oldName;
    }
}


function createChangeAction(name) {
    return {
        type: 'changeName',
        name
    }
}

let action3 = createChangeAction('hehe');


function ajaxData(store) {
    let next = store.dispatch;
    store.dispatch = function (action) {
        if (action.url) {
            action.name = 'ajax success';
            setTimeout(() => {
                next.call(store, action);
            }, 1000);
        } else {
            next.call(store, action);
        }
    }
    return store;
}

// 
function logger(store) {

    let next = store.dispatch;

    store.dispatch = function (action) {
        console.log('Action begin', action.type);
        next.call(store, action);
        console.log('Action end', action.type);
    }

    return store;
}

// [logger,ajaxData];
function useMiddleware(store, middles) {
    middles.reverse();
    middles.forEach(middle => {
        middle(store);
    })
    return store;
}

useMiddleware(sto, [logger, ajaxData]);

sto.dispatch({
    type: 'chageName',
    url: '////'
})

sto.listen(() => {
    console.log(sto);
})