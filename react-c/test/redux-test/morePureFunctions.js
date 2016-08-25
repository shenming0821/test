'use strict';

let state = {
    aaa: { name: 'ming' },
    bbb: { group: 'javacript' },
    ccc: { age: 23 }
}

function update(updaters, state) {
    console.log(updaters);
    let newState = {};
    const keys = Object.keys(updaters);
    console.log(keys);
    keys.forEach(key => {
        let updater = updaters[key];
        let value = state[key];
        let newSubState = updater(value);
        newState[key] = newSubState;
    })

    let result = Object.assign({}, state, newState);
    console.log(result);
}

function aaaUpdater(subState) {
    return { name: 'shen' };
}
function bbbUpdater(subState) {
    return { group: 'node.js' };
}

update({
    aaa: aaaUpdater, bbb: bbbUpdater
}, state);