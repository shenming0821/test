

const Reflux = require('reflux');

const action = Reflux.createAction({

    preEmit(data){
        return {
            name: 'leo'
        }
    },

    shouldEmit(){
        return true;
    }
});


action.listen(data=>console.log(data));

action.trigger({name: 'zengliang'});


