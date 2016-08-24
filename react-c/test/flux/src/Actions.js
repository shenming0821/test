const Dispatcher = require('./Dispatcher');
const WebAPI = require('./WebAPI');
class Actions{

    add(name){

        // var action = {};
        // Dispatcher.dispatch(action);

        // WebAPI.add(name,function(){
        //     if(err){
        //         action = {actionType:"confirmAddSuccess"};
        //         Dispatcher.dispatch(action);
        //     }else{
        //         action = {actionType:'addError'};
        //         Dispatcher.dispatch(action);
        //     }

        // });

        // WebAPI.add(name,function(err){
        //     let action;
        //     if(!err){
        //         action = {
        //             actionType: 'add',
        //             name
        //         };
        //     } else {
        //         action = {
        //             actionType: 'addError',
        //             name
        //         };
        //     }

        //     Dispatcher.dispatch(action);
        // });

        var action = {
            actionType: 'add',
            name
        };

        // Dispatcher._dispatch(action);
        Dispatcher.dispatch(action);
    }

    getAll(){

        // server端请求返回data
        WebAPI.getAll(function (data) {
            var action = {
                actionType: 'getAll',
                list: data
            }

            Dispatcher.dispatch(action); // 放到调度器中处理
        });
    }

}

module.exports = Actions;