hooks-test.js
> preEmit(data): [data] 数据处理
> shouldEimt(data): boolean 是否触发

#### 一次性创建多个Action

```js
Reflux.createActions(['action1','action2'])
Reflux.createAction({
    action1:{...},
    action2:{...}
})
```

#### 创建第一个Store

* createStore 创建 store
* init 初始化方法
* store 是一个 listener & publisher

#### store监听action的方式

* listenTo(action,handleMethod); 监听一个
* listenToMany(actions) 监听多个
* listenables 监听多个