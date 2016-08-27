const Reflux = require('reflux');

//const actions = Reflux.createActions([
//    'action1', 'action2'
//]);

const actions = Reflux.createActions(
    {
        action1: {
            asyncResult: true
        }, action2: {
        asyncResult: true
    }
    }
);

const store = Reflux.createStore({


    listenables: actions,

    //init(){
    //    //this.listenTo(actions.action1,this.onAction1);
    //    //this.listenTo(actions.action2,this.onAction1);
    //
    //    this.listenToMany(actions);
    //},

    onAction1(){
        console.log(1212);
    },

    onAction1Completed(){
        console.log('action1 completed');
    },

    onAction2(){
        console.log('action2')
    }

});

actions.action1();
actions.action2();
actions.action1.completed();