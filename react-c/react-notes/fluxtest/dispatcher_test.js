var Dispatcher = require('flux').Dispatcher;
var dispatcher = new Dispatcher();

var store1,store2,store3;

// containerUI -> componentDidMount(){
//   store1.on('update',function(list){
//       this.setState / forceUpdate
//   });
//}


store1.id = dispatcher.register(function (action) {
   console.log('callback 1');
});

store2.id = dispatcher.register(function (action) {
    dispatcher.waitFor([store1.id,store3.id]);
   console.log('callback 2');
});

store3.id = dispatcher.register(function (action) {
   console.log('callback 3');
});

dispatcher.dispatch();
