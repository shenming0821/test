const Item = React.createClass({
    displayName: 'Item',

    getDefaultProps() {
        // console.log('get default props');
        return {
            group: 123
        }
    },

    getInitialState() {
        // console.log('get initial state');
        return {
            name: 'hehe'
        }
    },

    componentWillMount() { //可以对内部状态进行更改
        console.log('componentWillMount');

        // 可更改state
        this.state.name = 'haha';
    },

    componentDidMount() {
        console.log('componentDidMount');
        const dom = ReactDOM.findDOMNode(this);
        // console.log(dom);

        let isYellow = false;
        dom.style.backgroundColor = 'yellow';

        // 可操作dom
        this.state.timer =  setInterval(function () {
            if(isYellow){
                dom.style.backgroundColor = 'red';
                isYellow = false;
            } else {
                dom.style.backgroundColor = 'yellow';
                isYellow = true;
            }
        },1000);
    },

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');

        // 类似componentWillMount()

        // 作用:可根据props设置state

        // 点击update不会调用，父类可以注入props参数，内部无法更改props参数,只能更改state

        // state

    },

    shouldComponentUpdate(nextProps, nextState) { // 判断新的props和新的state是否更新
        console.log('shouldComponentUpdate');
        return false;
    },

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');

        // dom

        //let dom = ReactDOM.findDOMNode(this); //可得到 旧 的dom对象
    },

    // render()

    componentDidUpdate(oldProps, oldState) {
        console.log('componentDidUpdate');

        // dom  最新的
    },

    update() {
        this.setState({ name: "he" });
        // this.forceUpdate(); //绕过 shouldComponentUpdate() 
        //直接执行 componentWillUpdate()  componentDidUpdate()

        //componentWillUpdate
        // render
        // componentDidUpdate

    },

    render() {
        console.log('render');
        return (
            <div>
                {this.props.group + this.state.name}
                <button onClick={this.update}>update</button>
            </div>
        )
    },

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.state.timer);
    }

})

function render(bool) {
    ReactDOM.render(
        <div>
            <Item />
            {bool ? <Item /> : ''}
        </div>,
        document.getElementById('test')
    )
}

// const List = React.createClass({
//     render() {
//         return (
//             <div>
//                 <Item />
//             </div> ,
//             document.getElementById('test')
//         )
//     }
// })


// render();
// render();

// getDefaultProps()只运行一次
// getInitialState()运行多次

// render(true);

document.getElementById('clear').onclick = function(){
    render();
};