const Reflux = require('reflux');

const action = Reflux.createAction();

const store = Reflux.createStore({

    //data:{num:0},

    init(){
        this.data  = {num:0};
        this.listenTo(action, function(){
            ++this.data.num;
            this.trigger(this.data);
        });
    },

    onClick(data){
        ++this.data.num;
        this.trigger(this.data);
    }
});


store.listen(function (state) {
    console.log(state)
});

action();
action();
action();
action();
action();