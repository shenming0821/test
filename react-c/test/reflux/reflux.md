## Reflux

* 去掉Dispatcher
* 通过统一的事件订阅的方式进行组件沟通

### Action

* 事件发布者

### Store

* 事件监听者,监听Action,更改自身数据
* 事件发布者

### React UI

* 监听Store

> 多个Store也可以互相监听