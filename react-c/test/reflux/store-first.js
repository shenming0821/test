const Reflux = require('reflux');

const action = Reflux.createAction();

const store = Reflux.createStore({ // 负责数据存储，数据更改

    // data:{num:0},
    init() { // 创建时会被执行一次
        this.data = { num: 0 };

        this.listenTo(action, this.onClick); // 内置方法 监听action
    },

    onClick(data) {
        ++this.data.num;
        this.trigger(this.data);
    }
});

store.listen(function (state) {
    console.log(state);
})

action();
action();
action();
action();