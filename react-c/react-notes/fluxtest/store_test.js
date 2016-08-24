'use strict';
const Dispatcher = require('flux').Dispatcher;
const dispatcher = new Dispatcher;
const Store = require('flux/utils').Store;

class MyStore extends Store {

    constructor(dispatcher) {
        super(dispatcher);
        this.data = '';
    }

    // 2
    __onDispatch(action) {

        switch (action.type) {
            case 'update':
                this.__changed = true;
                this.data += action.data;
                break;

        }
    }

}

let store = new MyStore(dispatcher);
let store2 = new MyStore(dispatcher);

// UI
store.addListener(function callback(args){
    console.log('args = ',args);
    console.log('data => ',store.data);
});

store2.addListener(function callback(args){
    console.log('args = ',args);
    console.log('data => ',store.data);
});

// UI -> CLICK -> ACTION 1
dispatcher.dispatch({
    type:'update',
    data:'leo'
});

