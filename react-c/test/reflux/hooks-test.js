const Reflux = require('reflux');

const action = Reflux.createAction({
    preEmit(data){ // 处理数据
        data.name = 'newname';
    },

    shouldEmit(){ // 是否可以触发
        return true;
    }
})

action.listen(data=>console.log(data));

action({name:'oldname'});
action.trigger({name:'oldname'});