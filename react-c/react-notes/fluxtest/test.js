
//var store;
//dispatcher.register(store);
//dispatcher.register(store2);
//dispatcher.register(store3);
//
//dispatcher.dispatch(action); // for

var store;

dispatcher.register(function callback(action){
   //
   store(action);
});


function reduce(state,action){

   return {
      name:'iii'
   }

}

function areEqual(oldState,newState){
    return oldState === newState;
}

let oldState = {name:'leo'};

let newState = reduce(oldState,null);

console.log(areEqual(oldState,newState));

dispatcher.dispatch(action);
