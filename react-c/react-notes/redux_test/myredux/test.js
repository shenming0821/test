
'use strict';

const createStore = require('./index').createStore;
const useMiddleware = require('./index').useMiddleware;

const logger = store => next => action => {
    console.log('Action begin', action.type)
    next.call(store, action);
    console.log('Action end', action.type)
}

// m1  m2  m3  store.dispatch

// function finishDispatch(action) {
    
//     function m1(action) {
        
//         console.log(1212);
//         action.abc = 123;

//         action = {name:"leo",type:"changeName"}

//         function m2(action) {

//             console.log(2);
//             function m3(action) {

//                 store.dispatch(action);
//             }

//             m3(action);
//         }

//         m2(action)
//     }

//     m1(action);
// }



// const logger = function (store) {
//     return function (next) {
//         return function (action) {
//             console.log('Action begin', action.type)
//             next.call(store, action);
//             console.log('Action end', action.type)
//         }
//     }
// }

const store = createStore(function (state, action) {
    if (action.type == 'changeName') {
        return {
            name: action.name
        }
    } else {
        return state
    }
}, { name: 'leo' });

useMiddleware(store, [logger]);

store.listen(() => {
    console.log(store.state);
});

store.dispatch(
    {
        type: 'changeName',
        name: 'zeng liang'
    }
)