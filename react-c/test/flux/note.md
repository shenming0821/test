### Store
1. Store存放数据,主要逻辑业务
2. 组件componentDidMount中绑定一个Store的方法(用新的数据更新组件)
3. 组件中触发action方法，传送新的数据到Store
4. Store中接受新的数据，并触发<2>中的方法

### Dispatcher
> Dispatcher（调度器）是Store和Actions中间的一个环节
```js
    register(storeCallback){ // 注册
       storeCallbackList.push(storeCallback);
    },

    _dispatch(action){  // 分发 //调用所有的function把action传进去
        for (let callback of storeCallbackList){
            callback(action);
        }
    }
```
> 在Store中注册方法：
```js
    Dispatcher.register(action => {
        switch (action.actionType) {
            case 'add':
                this._add(action.name);
                break;
        }
    })
```
> 在Action中把action分配到Dispatcher：
```js
    add(name){
        var action = {
            actionType: 'add',
            name
        };

        Dispatcher._dispatch(action);
    }
```