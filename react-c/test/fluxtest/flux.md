## flux
```js
    const React = require('react');
    const Dispatcher = require('flux').Dispatcher;
    const dispatcher = new Dispatcher; // 实例一个Dispatcher
    const Store = require('flux/utils').Store;
    const ReactDOM = require('react-dom');
```
#### Store
```js
class ListStore extends Store { //
    constructor(dispatcher) {
        super(dispatcher);
        this.state = {
            List: []   
        }
    }

    __onDispatch(action) {
        switch (action.type) {
            case 'add':
                this.__changed = true;
                this.state.List.push(action.item);
                break;
        }
    }
}
```
> __onDispatch源代码中为抽象方法,store在此注册

> this.__changed为true时执行方法

#### Component
```js
let store = new ListStore(dispatcher); //

class ContanierUI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        this.remove = store.addListener(()=>this.setState({list: store.state.List}));
        // 绑定store方法，监听以刷新数据
        // remove返回一个函数 可以用来删除
    }

    componentWillUnmount() {
        this.remove(); // 解除addListener
    }
    
    click(){
        let value = this.refs.input.value;
        let addAction = {
            type: 'add',
            item: value
        }
        dispatcher.dispatch(addAction);
        // 将数据分配到dispatcher中
    }

    render() {
        return (
            <ul>
                <li>
                    <input type="" ref='input'/>
                    <button onClick={this.click.bind(this)}>add</button>
                </li>
                {this.state.list.map(item => <li>{item}</li>) }
            </ul>
        );
    }

}

ReactDOM.render(<ContanierUI />,document.body);
```