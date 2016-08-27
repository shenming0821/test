'use strict';

const Store = require('./Store');


exports.createStore = function createStore(updaters, defaultState) {
    const sto = new Store(defaultState);
    sto.setUpdates(updaters);
    return sto;
}

// [logger, ajaxData]
exports.useMiddleware = function useMiddleware(store, middles) {

    middles.reverse();

    middles.forEach(middle => {
        let next = store.dispatch;
        store.dispatch = middle(store)(next);
        // store.dispatch = middle(store)(next.bind(store));
    });

    // [m1,m2,m3]

    // let dispatch = {//m3
    //     { //m2
    //         { // m1
    //             store.dispatch
    //         }
    //     }
    // }


    // store.dispatch(action);


    return store;
}