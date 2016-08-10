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

    componentWillMount(){ //可以对内部状态进行更改
        console.log('componentWillMount');

        // 可更改state
        this.state.name = 'haha';
    },

    componentDidMount(){
        console.log('componentDidMount');
        const dom = ReactDOM.findDOMNode(this);
        console.log(dom);

        let isYellow = false;
        dom.style.backgroundColor = 'yellow';

        // 可操作dom
        // setInterval(function () {
        //     if(isYellow){
        //         dom.style.backgroundColor = 'red';
        //         isYellow = false;
        //     } else {
        //         dom.style.backgroundColor = 'yellow';
        //         isYellow = true;
        //     }
        // },1000)
    },

    render() {
        console.log('render');
        return (
            <div>
                {this.props.group + this.state.name}
            </div>
        )
    }

})

ReactDOM.render(
    <div>
        <Item />
        <Item />
    </div>,
    document.body)

// getDefaultProps()只运行一次
// getInitialState()运行四次