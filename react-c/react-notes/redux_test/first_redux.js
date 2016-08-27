const Redux = require('redux');
 
const reducer = function (state,action) {

    if(typeof state ==="undefined") return {}

    if(action.type === 'changeName'){
        // var newStatte = JSON.parse(JSON.stringify(state));
        // state.name = "leo"; //xx
        return Object.assign({},state,{name:action.name});
       
    }else{
        return state;
    }
};


const store = Redux.createStore(reducer,{name:'leo'});

/**
 * store.dispatch({
 *    type:"changeName",
 *    payload:{
 *       name,group
 *     }
 * })
 * 
 * 
 * store.dispatch({
 *    type:"changeName",
 *    payload: new Error(),
 *    error:true
 * })
 * 
 * 
 */

var {subscribe,dispatch,getState} = store;

var state = getState(); // readonly

store.subscribe(()=> console.log(store.getState()));

// function callAction() {


//     var promiseAction = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var action = {
//                 type: "test",
//                 data: { name: 'leo' }
//             }

//             resolve(action);
//         });
//     });

//     promiseAction.then(function (action) {
//         store.dispatch(action);
//     })

// }
const action = {
    type:'changeName',name:'zengliang'
}
store.dispatch(action);




// function createStore(){

//     let myname = "leo";

//     function dispatch(){
//         console.log(myname);
//     }

//     return {
//         dispatch:dispatch
//     }
// }


// store = createStore();

// store.dispatch()
// var dispatch = store.dispatch;
// dispatch();

// function User(){
//     this.name = "leo";
//     this.changeName = function (name) {
//         this.name = name;
//     }
// }

// var u = new User();

// // u.changename("zengliang");
// // console.log(u.name)

// var changeName = u.changeName;
// changeName("zengliang");