const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');

class Actions {


    add(name) {


        var action = {};
        Dispatcher.dispatch(action);

        WebAPI.add(name,function(){
            if(err){
                action = {actionType:"confirmAddSuccess"};
                Dispatcher.dispatch(action);
            }else{
                action = {actionType:'addError'};
                Dispatcher.dispatch(action);
            }

        });


        //WebAPI.add(name, function (err) {
        //    let action;
        //    if (!err) {
        //        action = {
        //            actionType: 'add',
        //            name
        //        };
        //
        //    } else {
        //        action = {
        //            actionType: 'addError',
        //            name
        //        };
        //
        //    }
        //
        //    Dispatcher.dispatch(action);
        //
        //});


    }

    getAll() {

        WebAPI.getAll(function (data) {

            var action = {
                actionType: 'getAll',
                list: data
            };

            Dispatcher.dispatch(action);

        });

    }

}

module.exports = Actions;