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

const ston = createStore(
    {
        num: numUpdater,
        name: nameUpdater
    },
    {
        num: 5,
        name: 'abc'
    }
);


// const sto = new Store({ num: 5, name: 'abc' });

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

// sto.setUpdates({
//     num: numUpdater,
//     name: nameUpdater
// })

// sto.setUpdates(function (oldState, action) {
//     let newState = {};
//     switch (action.type) {
//         case '+':
//             newState.num = ++oldState.num;
//             return newState;
//         case '-':
//             newState.num = --oldState.num;
//             return newState;
//         default:
//             return oldState;
//     }
// });
sto.listen(() => {
    console.log(sto.state);
});

const action = ({
    type: '+'
});
const action2 = ({
    type: '-'
});
sto.dispatch(action);
sto.dispatch(action2);


// const action3 = ({
//     type: 'changeName',
//     name: 'hehe'
// });

function createChangeAction(name){
    return {
        type: 'changeName',
        name
    }
}

let action3 = createChangeAction('ming');

console.log('Action begin',action3.type);
sto.dispatch(action3);
console.log('Action end',action3.type);

// 异步获得数据

function ajaxData(callback){
    setTimeout(() => {
        callback({name:'hello world'})
    },1000);
}

ajaxData(function(date){
    sto.dipatch(createChangeAction(date.name));
});