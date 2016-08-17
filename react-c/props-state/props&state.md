#### 尽量使用 props
组件较简单时，尽量无状态化，自身需要的信息，尽量通过props属性的方式 <Item data/>
#### 最小化state
#### props和state结合计算出的结果，应放在渲染方法里。不要事先用state保存。

```react
state.size = props.data.length; // 不使用这种写法

render(){
    props.data.length // 直接在render方法中调用
}

```
```react
state.len = 12;
props.size = 5;

var resule = len*size;
state.result = state.len * props.size; // 不要用state保存计算结果

render(){
    var result = state.len * props.size // 保存到渲染方法里的变量
}

```
